import metax from "../../data/metax/metax.mjs"
import logger from "./logger.mjs"

//imports from standard libraries
import process from "process";
import fs from "fs";

//imports from third-party libraries
import fetch from "node-fetch"
import ws from "ws"

//global declarations
global.fetch = fetch;
global.WebSocket = ws;
fs.writeFileSync("data/metax/pid", process.pid.toString());

let config = {};
let fileData = {};
let headerData = {};
let tableTypesUuid = {};
let listInstancesUuid = []; // todo list to table
let tableAddressUuid = {};
let application = {};
let generateUuid = {};
let addressUuid = "";

async function keyExistsInsensitive(obj, key) { // todo change functions more optimal
    for (let objKey in obj) {
        if (objKey.toUpperCase() === key) {
            return obj[objKey];
        }
    }
    return 0;
}

function hasPropertyWithId(jsonObj, id) 
    return jsonObj.properties.find(property => property.id === id);
}

function getPropertyWithId(jsonObj, id) 
    return jsonObj.properties.find(property => property.id === id);
}

//
//Todo
//now * is unspecified value, when add derive, must call corresponding methods
async function setBaseData(type, innerObject, index) {
	baseProperty = getPropertyWithId(type, "Base");
	type = JSON.parse(await metax.get(baseProperty.value_type));
	if (hasPropertyWithId(type, "Base")) {
		setBaseData(type);
	} else {
		tempInstance = {
			"name" : type.name,
			"type" : type.type
		}
		arg = innerObject[index]
		switch (typeof arg) {
			case number:
				
				break;
			case string:
				
				break;
			case object:
				if (arg == null) {

				} else{

				}
				break;
		}
	}
}

/*
for (const innerKey in innerObject) {
	if (innerObject.hasOwnProperty(innerKey)) {
		const value = innerObject[innerKey]; 
		// innerKey is index 0, value #14528
		if (hasPropertyWithId(type, "Base")) {
			setBaseData(type, innerObject, index);
		} else {
			// set arguments


		}
	}
	*/

			async function create_instances(data) {
				let index = 0;
				for (const key in data) {
					if (data.hasOwnProperty(key)) {
						const nestedObject = data[key];
						// key #10
						for (const nestedKey in nestedObject) {
				if (nestedObject.hasOwnProperty(nestedKey)) {
					const innerObject = nestedObject[nestedKey];
					// nestedKey IFCPROJECT
					tempUuid = keyExistsInsensitive(tableTypesUuid, nestedKey);
					if (tempUuid) {
						type = JSON.parse(await metax.get(tempUuid));
						if (hasPropertyWithId(type, "Base")) {
							setBaseData(type, innerObject, index);
						} else {
							// set arguments


						}
					}
				}
			}
			tableAddressUuid.key = addressUuid;
			listInstancesUuid.push(addressUuid);
		}
	}
}

(async function main() {
    const args = process.argv.slice(2);
    if (args.length != 1) {
        logger("error", "Missing required argument {directory}.");
        return null;
    }
    try {
        await init();
        await metax_connect();
        await handle_remote_command(args[0]);
    } catch (e) {
        logger("error", `Couldn't connect to Metax ${e}. Retry in 60 seconds ...`);
        setTimeout(() => {
            main();
        }, 60000);
    }
})();

async function init(){
    config = fs.readFileSync("data/metax/config.json");
    config = JSON.parse(config);
}

async function metax_connect() {
    await metax.connect(config.host_name, config.port,
    fs.readFileSync("data/metax/certification/file.key.pem"),
    fs.readFileSync("data/metax/certification/file.crt.pem"),
    fs.readFileSync("data/metax/certification/password.txt", "utf8").trim())
    .then(r => logger("info", "Connecting to Metax"))
    .catch(e => logger("warn", "Connection to Metax Server was unsuccessful"))
}

async function handle_remote_command(directory) {
    // file name and schema 4
    logger("info", "Received remote command.");
    headerData = fs.readFileSync(directory + "/header.json");
    headerData = JSON.parse(headerData);

    fileData = fs.readFileSync(directory + "/data.json");
    fileData = JSON.parse(fileData);

    let schemaUuidsPath = "schema_uuids/" +  headerData["schema"] + "_uuids.json";
    tableTypesUuid = fs.readFileSync(schemaUuidsPath);
    tableTypesUuid = JSON.parse(tableTypesUuid);

    application = JSON.parse(await metax.get(tableTypesUuid[headerData["schema"]]));
    let file = {
        "name": headerData["name"],
        "description": headerData["description"],
        "type": tableTypesUuid["IfcFile"]
    };
    generateUuid = JSON.parse(await metax.save(JSON.stringify(file), "applcation/json"));
    file.uuid = generateUuid.uuid;
    await metax.save(JSON.stringify(file), "applcation/json", file.uuid);
    application.sessions.push(generateUuid.uuid);
    await metax.save(JSON.stringify(application), "applcation/json", application.uuid);
    await create_instances(fileData);
    process.exit(0);
}
