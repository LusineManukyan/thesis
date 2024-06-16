import { connect } from 'http2';
import fs from'fs';
import mime from 'mime-types';
const regexExp = /^(?:(?:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-){1,2}[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})|(?:[0-9a-fA-F]{32})$/

const mListeners = {};
let mListenerToken = 0;
let metax_host = 0;
let mWebsocket = "";
let mRegisterListenerRequest = "/db/register_listener?id=";
let mUnregisterListenerRequest = "/db/unregister_listener?id=";
let pingTimeout;


let httpGetFile = (path) => {
        return new Promise((resolve, reject) => {
                const get_request = metax_host.request({
                        ":path": path,
                        ":method": "GET"
                })
                let data = []; 
                let is_error = false;
                get_request
                        .on("response", headers => {
                                if(headers[":status"] === 400) {
                                        is_error = true;
                                }
                        })
                        .on("data", c => data.push(c) )
                        .on("end", () => {
                                if(is_error) {
                                        reject(data);
                                } else {
					const d = Buffer.concat(data);
                                        resolve(d);
                                }
                        })
                        .on("error", reject);
        });
}


let httpGet = (path) => {
        return new Promise((resolve, reject) => {
                const get_request = metax_host.request({
                        ":path": path,
                        ":method": "GET"
                })
                let data = "";
                let is_error = false;
                get_request
                        .on("response", headers => {
                                if(headers[":status"] === 400) {
                                        is_error = true;
                                }
                        })
                        .on("data", c => {
				data += c
			})
                        .on("end", () => {
                                if(is_error) {
                                        reject(data);
                                } else {
                                        resolve(data);
                                }
                        })
                        .on("error", reject);
        });
}


function heartbeat() {
	console.log('default', 'Heartbit received.');
	clearTimeout(pingTimeout);
	pingTimeout = setTimeout(() => {
			//TODO implement reconnect logic to close websocket connection and try to connect once again.
			console.log('warn', "Did not receive any ping for 60 seconds");
			process.exit(0);
	}, 60000);
}

function metax_connect(h, p, key, cert, passphrase) {
	return new Promise((resolve, reject) => {
		metax_host = connect(`https://${h}:${p}`, { key, cert, passphrase });
		metax_host.on("connect", () => {connect_websocket(h, p, key, cert, passphrase, resolve, reject)})
		metax_host.on("error", (e) => {
			reject(e);
			console.log("ERROR OCCURRED", e)
		})
		metax_host.on("close", () => metax_connect(h, p, key, cert, passphrase))
		metax_host.on("destroy", () => metax_connect(h, p, key, cert, passphrase))
	})
}

function connect_websocket(h, p, key, cert, passphrase, resolve, reject) {
	mWebsocket = new WebSocket(`wss://${h}:${p}`, {key, cert});
	//mWebsocket.onerror = e => reject(e);
	//mWebsocket.onclose = e => reject(e);
	mWebsocket.onerror = e => console.log('Socket Interrupt (onerror)', e);
	mWebsocket.onclose = e => {
		console.log('Socket Interrupt (onclose)', e)
		clearTimeout(pingTimeout);
	};
	mWebsocket.on('ping', heartbeat);
	mWebsocket.onopen = e => {
		heartbeat();
		mWebsocket.onmessage = 
			e => dispatchWebSocketMessage(e, resolve);
	};
}

function parseWebSocketEvent(e) {
	try {
		return JSON.parse(e.data);
	} catch (e) {
		console.assert(false,
			`failed to parse data field of the ` + 
			`Metax on-update event: ${JSON.stringify(e)}`);
		throw e;
	}
}

function handleConnectionMessage(e, msg, resolve) {
	if(msg.event === "connected") {
		mListenerToken = msg.token;
		console.log('info', `Websocket token: ${msg.token}`)
		resolve('WebSocket Connected\n'); 
	}
}

function dispatchWebSocketMessage(e, resolve) {
	try {
		let msg = parseWebSocketEvent(e);
		if("event" in msg && "uuid" in msg) {
			handleDBWebSocketMessage(e, msg);
			return;
		} else if("event" in msg && "token" in msg) {
			handleConnectionMessage(e, msg, resolve);
			return;
		}
	} catch (er) {
		console.log `Parse failed err=${er}`;
	}
}

function handleDBWebSocketMessage(e, msg) {
	console.assert('event' in msg, 'on-update message ' +
		'from Metax should have "event" field');
	console.assert('uuid' in msg, 'on-update message ' +
		'from Metax should have "uuid" field');
	const uuid = msg['uuid'];
	const ev = msg['event'];
	const callbacks = mListeners[uuid];
	if( !callbacks || callbacks.length < 1) { return; }
	for (let j in callbacks) {
		try {
			if(! callbacks[j].not_send_me) {
				callbacks[j].call(uuid,ev);
			}
		} catch (e) {
			console.error('metax on-update handler threw' +
				` an assertion: ${JSON.stringify(e)}`);
			throw e;
		}
	}
}

async function registerListener(uuid, cb, b) {
	console.assert(mListeners);
	let callbacks = mListeners[uuid];
	if (! callbacks) {
		let token = `&token=${mListenerToken}`;
		const url = mRegisterListenerRequest + uuid + token;
		await httpGet(url)
			.catch(e => {
				throw Error(`metax.HTTPGet(${url}) `+
					`resulted in error:\n ${e}`);
			});
		callbacks = mListeners[uuid] = [];
	}
	console.assert(callbacks.indexOf(cb) === -1,
		`the uuid ${uuid} already has ` +
		`a registered callback ${cb}`);
	callbacks.push({"call" : cb, "not_send_me" : b});
}

async function unregisterListener(uuid,cb) {
	const callbacks = mListeners[uuid];
	console.assert(callbacks,
		'there is no listener registered ' + `for ${uuid}`);
	console.assert(callbacks.length > 0
		, `listeners list for ${uuid} found but is empty`);
	if (callbacks.length === 1) {
		console.assert(cb === callbacks[0].call,
			`the only registered callback for ${uuid}`+
			` is not ${cb}`);
		console.log(mListenerToken)
		let token = `&token=${mListenerToken}`;
		const url = mUnregisterListenerRequest+ uuid + token;
		await httpGet(url)
			.catch( e => {
				throw Error(`metax.HTTPGet(${url})`+
					` resulted in error:\n ${e}`);
			});
		delete mListeners[uuid];
	} else {
		let p = false;
		for(let j in callbacks) {
			if(cb == callbacks[j].call) {
				callbacks.splice(j,1);
				p = true;
				break;
			}
		}
		console.assert(p !== 0, `the listeners for ${uuid} ` +
			`do not contain the callback ${cb}`);
	}
}

async function metax_get(uuid){
	return await httpGet("/db/get?id=" + uuid)
}

async function metax_get_file(uuid){
	return await httpGetFile("/db/get?id=" + uuid)
}


function metax_save(data, content_type, uuid) {
    return new Promise((resolve, reject) => {
	const options = {
		':method': 'POST',
		'Content-Type': content_type

	};
	if (!uuid) {
	    options[":path"] = "/db/save/node";	
	} else {
		options[":path"] = `/db/save/node?id=${uuid}`;
		if(regexExp.test(uuid)){
		    options[":path"] = `/db/save/node?id=${uuid}`;
		} else {
			console.log(uuid);
			console.log("It isn't uuid")
		}
	}
	if (typeof data === 'object') {
	    data = JSON.stringify(data);
	}
	    let resData = '';
	    const req = metax_host.request(options)
	    req.on('data', (d) => {
		    resData += d;
	    });
	    req.on('end', () => {
		    resolve(resData);
	    });
	    req.on('error', (e) => {
		    reject(e);
	    });
	    req.write(data);    
	    req.end();
    });
}

function metax_save_file(filePath, uuid) {
    return new Promise((resolve, reject) => {
	const options = {
	    hostname: 'instigate.academy',
	    port: 542,
	    method: 'POST',	
	    key: fs.readFileSync('/opt/metax_cert/file.key.pem'),
	    cert: fs.readFileSync('/opt/metax_cert/file.crt.pem'),
	    headers: { 'Content-Type': mime.lookup(filePath) }
	};
	if (!uuid) {
	    options.path = "/db/save/node";	
	} else {
		if(regexExp.test(uuid)){
		    options.path = `/db/save/node?id=${uuid}`;
		} else {
			console.log("It isn't uuid")
		}
	}
	const req = https.request(options, (res) => {
	    let resData = '';
	    res.on('data', (d) => {
		resData += d;
	    });
	    res.on('end', () => {
		resolve(resData);
	    });
	});
	req.on('error', (e) => {
	    reject(e);
	});
	req.write(fs.readFileSync(filePath));
	req.end();
    });
}

export default {
	connect: metax_connect,
	get: metax_get,
	get_file: metax_get_file,
	save: metax_save,
	save_file: metax_save_file,
	register_listener: registerListener,
	unregister_listener: unregisterListener
}

