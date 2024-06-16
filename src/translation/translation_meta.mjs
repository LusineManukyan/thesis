import { compiler as meta } from "../../data/meta/meta.mjs"
import fs from 'fs' 
const syntax = `
․ՔԵՐԱԿԱՆՈՒԹԻՒՆ ԾՐԱԳԻՐ

ԾՐԱԳԻՐ =
	ՆԱԽԱԲԱՆ
        { ՄԵԿՆԱԲԱՆՈՒԹԻՒՆ }
        ՍԽԵՄԱ
	{ ՄԵԿՆԱԲԱՆՈՒԹԻՒՆ }
	ՎԵՐՋԱԲԱՆ ;

ՆԱԽԱԲԱՆ =
	․ԵԼ('//imports from this project' ․ՆՏ)
	․ԵԼ('import metax from "../../data/metax/metax.mjs"' ․ՆՏ)
	․ԵԼ('import logger from "./logger.mjs"' ․ՆՏ ․ՆՏ)

	․ԵԼ('//imports from standard libraries' ․ՆՏ)
	․ԵԼ('import { exec, execSync } from "child_process";' ․ՆՏ)
	․ԵԼ('import process from "process";' ․ՆՏ)
	․ԵԼ('import fs from "fs";' ․ՆՏ)
	․ԵԼ('import os from "os";' ․ՆՏ)
	․ԵԼ('import path from "path";' ․ՆՏ ․ՆՏ)

	․ԵԼ('//imports from third-party libraries' ․ՆՏ)
	․ԵԼ('import fetch from "node-fetch"' ․ՆՏ)
	․ԵԼ('import ws from "ws"' ․ՆՏ ․ՆՏ)

	․ԵԼ('//global declatarations' ․ՆՏ)
	․ԵԼ('global.fetch = fetch;' ․ՆՏ)
	․ԵԼ('global.WebSocket = ws;' ․ՆՏ ․ՆՏ)

	․ԵԼ('fs.writeFileSync("data/metax/pid", process.pid.toString());' ․ՆՏ ․ՆՏ)

	․ԵԼ('const scriptStartTime = Date.now();' ․ՆՏ)
	․ԵԼ('const hourInMillis = 3600000; ' ․ՆՏ ․ՆՏ)

	․ԵԼ('let config = null;' ․ՆՏ)
	․ԵԼ('let mainUUID = null;' ․ՆՏ)
	․ԵԼ('let tableUuid = {"BOOLEAN" : "8e749ec3-afca-46b4-a40d-ae4ba57739b5",' ․ՆՏ)
	․ԵԼ('"NUMBER" : "44be8478-ad50-4602-92e8-7175ee05ef1f", "STRING" : "71b30d14-59f8-482d-993d-c913e8737f9e"};' ․ՆՏ)
	․ԵԼ('let functionUuid = {};' ․ՆՏ)
	․ԵԼ('let generateUuid = {};' ․ՆՏ)
	․ԵԼ('let typeUuid = "";' ․ՆՏ)
	․ԵԼ('let application = {};' ․ՆՏ)
	․ԵԼ('let apllicationUuid = "";' ․ՆՏ)
	․ԵԼ('let applicationId = "";' ․ՆՏ)
	․ԵԼ('let enumValue = {};' ․ՆՏ)
	․ԵԼ('let property = {};' ․ՆՏ)
	․ԵԼ('let collection = {};' ․ՆՏ)
	․ԵԼ('let subcollection = {};' ․ՆՏ)
	․ԵԼ('let method = {};' ․ՆՏ)
	․ԵԼ('let func = {};' ․ՆՏ)
	․ԵԼ('let body = {};' ․ՆՏ)
	․ԵԼ('let code = {};' ․ՆՏ)
	․ԵԼ('let baseProperty = {};' ․ՆՏ)
	․ԵԼ('let name = "";' ․ՆՏ)
	․ԵԼ('let tname = "";' ․ՆՏ)
	․ԵԼ('let index = 0;' ․ՆՏ ․ՆՏ)
	․ԵԼ('let hasChildren = false;' ․ՆՏ ․ՆՏ)
	․ԵԼ('let tableChildren = {};' ․ՆՏ ․ՆՏ)
	․ԵԼ('let allowedValues = [];' ․ՆՏ ․ՆՏ)

	․ԵԼ('function AddChildren(name, values) {' ․ՆՏ ․ՁԴ+)
		․ԵԼ('if (tableChildren[name]) {' ․ՆՏ ․ՁԴ+)
		․ԵԼ('for (const ind in tableChildren[name]) {' ․ՆՏ ․ՁԴ+)
		․ԵԼ('values.push(tableChildren[name][ind]);' ․ՆՏ)
		․ԵԼ('AddChildren(tableChildren[name][ind], values);' ․ՆՏ)
		․ԵԼ(․ՁԴ- '}' ․ՆՏ)
		․ԵԼ(․ՁԴ- '}' ․ՆՏ)
		․ԵԼ(․ՁԴ- '}' ․ՆՏ)

	․ԵԼ('function Structure(string1, string2, jsonObject, string4) {' ․ՆՏ ․ՁԴ+)
		․ԵԼ('this.first = string1;' ․ՆՏ)
		․ԵԼ('this.second = string2;' ․ՆՏ)
		․ԵԼ('this.third = jsonObject;' ․ՆՏ)
		․ԵԼ('this.fourth = string4;' ․ՆՏ)
	․ԵԼ(․ՁԴ- '}' ․ՆՏ)
	․ԵԼ('var IncompleteTypes = [];' ․ՆՏ ․ՆՏ)

	․ԵԼ('(async function main() {' ․ՆՏ ․ՁԴ+)
		․ԵԼ('try {' ․ՆՏ ․ՁԴ+)
			․ԵԼ('await init();' ․ՆՏ)
			․ԵԼ('await metax_connect();' ․ՆՏ)
			․ԵԼ('await handle_remote_command();' ․ՆՏ)
			․ԵԼ('check_and_exit();' ․ՆՏ)
		․ԵԼ(․ՁԴ- '} catch (e) {' ․ՆՏ ․ՁԴ+)
			․ԵԼ('logger("error", \`Couldn' 39 't connect to Metax \${e}. Retry in 60 seconds ...\`);' ․ՆՏ)
			․ԵԼ('setTimeout(() => {' ․ՆՏ ․ՁԴ+)
				․ԵԼ('main();' ․ՆՏ)
			․ԵԼ(․ՁԴ- '}, 60000);' ․ՆՏ)
		․ԵԼ(․ՁԴ- '}' ․ՆՏ)
	․ԵԼ(․ՁԴ- '})();' ․ՆՏ ․ՆՏ)

	․ԵԼ('async function init(){' ․ՆՏ ․ՁԴ+)
		․ԵԼ('config = fs.readFileSync("data/metax/config.json");' ․ՆՏ)
		․ԵԼ('config = JSON.parse(config);' ․ՆՏ)
	․ԵԼ(․ՁԴ- '}' ․ՆՏ ․ՆՏ)

	․ԵԼ('function check_and_exit() {' ․ՆՏ ․ՁԴ+)
		․ԵԼ('const elapsedTime = Date.now() - scriptStartTime;' ․ՆՏ)
		․ԵԼ('if (elapsedTime >= hourInMillis)' ․ՆՏ ․ՁԴ+)
			․ԵԼ('process.exit(0);' ․ՆՏ)
		․ԵԼ(․ՁԴ- 'else' ․ՆՏ ․ՁԴ+)
			․ԵԼ('setTimeout(check_and_exit, 600000); ' ․ՆՏ)
	․ԵԼ(․ՁԴ- ․ՁԴ- '}' ․ՆՏ ․ՆՏ)

	․ԵԼ('async function metax_connect() {' ․ՆՏ ․ՁԴ+)
		․ԵԼ('await metax.connect(config.host_name, config.port,' ․ՆՏ ․ՁԴ+)
			․ԵԼ('fs.readFileSync("data/metax/certification/file.key.pem"),' ․ՆՏ)
			․ԵԼ('fs.readFileSync("data/metax/certification/file.crt.pem"),' ․ՆՏ)
			․ԵԼ('fs.readFileSync("data/metax/certification/password.txt", "utf8").trim())' ․ՆՏ)
			․ԵԼ('.then(r => logger("info", "Connecting to Metax"))' ․ՆՏ)
			․ԵԼ('.catch(e => logger("warn", "Connection to Metax Server was unsuccessful"))' ․ՆՏ)
	․ԵԼ(․ՁԴ- ․ՁԴ- '}' ․ՆՏ ․ՆՏ)

	․ԵԼ('async function register_command_listener() {' ․ՆՏ ․ՁԴ+)
		․ԵԼ('await metax.register_listener(config.channel, handle_remote_command)' ․ՆՏ ․ՁԴ+)
			․ԵԼ('.catch(e => logger("error", \`Failed to register listener for \${config.channel}\`));' ․ՆՏ)
		․ԵԼ(․ՁԴ- 'logger("info", \`Registered listener to \${config.channel}\`);' ․ՆՏ)
	․ԵԼ(․ՁԴ- '}' ․ՆՏ ․ՆՏ)

	․ԵԼ('async function handle_remote_command() {' ․ՆՏ ․ՁԴ+)
		․ԵԼ('logger("info", "Received remote command.");' ․ՆՏ)
		․ԵԼ('try {' ․ՆՏ ․ՁԴ+)
			․ԵԼ('mainUUID = JSON.parse(await metax.get(config.channel));' ․ՆՏ)
		․ԵԼ(․ՁԴ- '} catch(e) {' ․ՆՏ ․ՁԴ+)
			․ԵԼ('logger("error",\`Couldn' 39 't get Channel UUID. \${e}\`);' ․ՆՏ)
			․ԵԼ('return;' ․ՆՏ)
		․ԵԼ(․ՁԴ- '}' ․ՆՏ)
		․ԵԼ('add_types();' ․ՆՏ)
	․ԵԼ(․ՁԴ- '}' ․ՆՏ ․ՆՏ)

	․ԵԼ('async function add_types()' ․ՆՏ '{' ․ՆՏ ․ՆՏ)
	;

ԵԼ_ՍԽԵՄԱ_ՆԱԽԱԲԱՆ =
	․ԵԼ('application = {' ․ՆՏ ․ՁԴ+)
		․ԵԼ('"name": {"en_US":"' * '"},' ․ՆՏ)
		․ԵԼ('"id": "' * '",' ․ՆՏ)
		․ԵԼ('"type": "2da70db5-c04a-43a5-94e0-3e7304879599",' ․ՆՏ)
		․ԵԼ('"root": "42f13946-3947-4806-919d-9e94722cdd6a-5be10382-1bee-4a80-978a-6f31e770e024",' ․ՆՏ)
		․ԵԼ('"types": [],' ․ՆՏ)
		․ԵԼ('"functions": []' ․ՆՏ)
	․ԵԼ(․ՁԴ- '};' ․ՆՏ ․ՆՏ)

	․ԵԼ('generateUuid =  JSON.parse(await metax.save(JSON.stringify(application), "applcation/json"));' ․ՆՏ)
	․ԵԼ('application.uuid  = generateUuid.uuid;' ․ՆՏ)
	․ԵԼ('tableUuid.' * ' = generateUuid.uuid;' ․ՆՏ)
	․ԵԼ('await metax.save(JSON.stringify(application), "applcation/json", application.uuid);' ․ՆՏ)
	․ԵԼ('mainUUID.applications.push(generateUuid.uuid);' ․ՆՏ)
	․ԵԼ('await metax.save(JSON.stringify(mainUUID), "applcation/json", mainUUID.uuid);' ․ՆՏ)
	․ԵԼ('applicationId = application.id;' ․ՆՏ)
	․ԵԼ('apllicationUuid = generateUuid.uuid;' ․ՆՏ ․ՆՏ)


        ․ԵԼ('let file = {' ․ՆՏ)
        ․ԵԼ('"name": {"en_US":"Ifc File"},' ․ՆՏ)
	․ԵԼ('"id":"Ifc_file",' ․ՆՏ)
	․ԵԼ('"type": "585f3fef-7246-4612-8f24-b98d1a9ae8b7",' ․ՆՏ)
	․ԵԼ('"root": "42f13946-3947-4806-919d-9e94722cdd6a-5be10382-1bee-4a80-978a-6f31e770e024",' ․ՆՏ)
	․ԵԼ('"properties" : [' ․ՆՏ)
	․ԵԼ('{"id":"name",' ․ՆՏ)
	․ԵԼ('"name":{"en_US": "name"},' ․ՆՏ)
	․ԵԼ('"value_type":"71b30d14-59f8-482d-993d-c913e8737f9e",' ․ՆՏ)
	․ԵԼ('"mandatory":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"default_value":"",' ․ՆՏ)
	․ԵԼ('"readonly":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"description":"",' ․ՆՏ)
	․ԵԼ('"visible":"b4598a37-3126-42c1-a7b2-2906b12989f8",' ․ՆՏ)
	․ԵԼ('"visible_in_list_view":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"enable_internalization":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"enable_version_tracking":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"type":"0d71b3a2-c167-449c-877b-5a3eb0e42089",' ․ՆՏ)
	․ԵԼ('"visible_in_tree_view":"df868f39-896b-431b-b699-e71b4233eaf8"},' ․ՆՏ)
	․ԵԼ('{"id": "description",' ․ՆՏ)
	․ԵԼ('"name": {"en_US":"description"},' ․ՆՏ)
	․ԵԼ('"value_type":"96ec3148-fcf1-4a38-b303-0f8ad2b95137",' ․ՆՏ)
	․ԵԼ('"mandatory":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"default_value":"",' ․ՆՏ)
	․ԵԼ('"readonly":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"description":"",' ․ՆՏ)
	․ԵԼ('"visible":"b4598a37-3126-42c1-a7b2-2906b12989f8",' ․ՆՏ)
	․ԵԼ('"visible_in_list_view":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"enable_internalization":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"enable_version_tracking":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"type":"0d71b3a2-c167-449c-877b-5a3eb0e42089",' ․ՆՏ)
	․ԵԼ('"visible_in_tree_view":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"make_watcher":"df868f39-896b-431b-b699-e71b4233eaf8"},' ․ՆՏ)
	․ԵԼ('{"id":"uuid",' ․ՆՏ)
	․ԵԼ('"name": {"en_US":"uuid"},' ․ՆՏ)
	․ԵԼ('"value_type":"a480317b-b7fa-4b81-8f19-ccb9224f3604",' ․ՆՏ)
	․ԵԼ('"mandatory":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"default_value":"",' ․ՆՏ)
	․ԵԼ('"readonly":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"description":"",' ․ՆՏ)
	․ԵԼ('"visible":"b4598a37-3126-42c1-a7b2-2906b12989f8",' ․ՆՏ)
	․ԵԼ('"visible_in_list_view":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"enable_internalization":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"enable_version_tracking":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"type":"0d71b3a2-c167-449c-877b-5a3eb0e42089",' ․ՆՏ)
	․ԵԼ('"visible_in_tree_view":"df868f39-896b-431b-b699-e71b4233eaf8"},' ․ՆՏ)
	․ԵԼ('{"id":"type",' ․ՆՏ)
	․ԵԼ('"name": {"en_US":"type" },' ․ՆՏ)
	․ԵԼ('"value_type":"585f3fef-7246-4612-8f24-b98d1a9ae8b7",' ․ՆՏ)
	․ԵԼ('"mandatory":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"default_value":"",' ․ՆՏ)
	․ԵԼ('"readonly":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"description":"",' ․ՆՏ)
	․ԵԼ('"visible":"b4598a37-3126-42c1-a7b2-2906b12989f8",' ․ՆՏ)
	․ԵԼ('"visible_in_list_view":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"enable_internalization":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"enable_version_tracking":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"type":"0d71b3a2-c167-449c-877b-5a3eb0e42089",' ․ՆՏ)
	․ԵԼ('"visible_in_tree_view":"df868f39-896b-431b-b699-e71b4233eaf8"}' ․ՆՏ)
	․ԵԼ(']' ․ՆՏ)
	․ԵԼ('};' ․ՆՏ)
	․ԵԼ('generateUuid =  JSON.parse(await metax.save(JSON.stringify(file), "applcation/json"));' ․ՆՏ)
	․ԵԼ('file.uuid  = generateUuid.uuid;' ․ՆՏ)
	․ԵԼ('await metax.save(JSON.stringify(file), "applcation/json", file.uuid);' ․ՆՏ)
	․ԵԼ('tableUuid.IfcFile = generateUuid.uuid' ․ՆՏ)
	․ԵԼ('application.types.push(generateUuid.uuid);' ․ՆՏ)

    	․ԵԼ('property = {' ․ՆՏ ․ՁԴ+)
    	․ԵԼ('"id": "Project",' ․ՆՏ)
    	․ԵԼ('"name": {"en_US":"Project"},' ․ՆՏ)
    	․ԵԼ('"description": "",' ․ՆՏ)
    	․ԵԼ('"mandatory": "b4598a37-3126-42c1-a7b2-2906b12989f8",' ․ՆՏ)
    	․ԵԼ('"readonly": "df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
    	․ԵԼ('"visible": "b4598a37-3126-42c1-a7b2-2906b12989f8",' ․ՆՏ)
    	․ԵԼ('"type":"0d71b3a2-c167-449c-877b-5a3eb0e42089",' ․ՆՏ)
        ․ԵԼ(․ՁԴ- '};' ․ՆՏ)
        ․ԵԼ('typeUuid = tableUuid.IfcProject;' ․ՆՏ)
        ․ԵԼ('if (typeUuid) {' ․ՆՏ ․ՁԴ+)
                ․ԵԼ('property.value_type = typeUuid;' ․ՆՏ)
                ․ԵԼ('file.properties.push(property);' ․ՆՏ)
        ․ԵԼ(․ՁԴ- '} else {' ․ՆՏ ․ՁԴ+)
                ․ԵԼ('IncompleteTypes.push( new Structure("pr_entity", "IfcFile", property, "IfcProject") );' ․ՆՏ)
        ․ԵԼ(․ՁԴ- '}' ․ՆՏ ․ՆՏ)

	․ԵԼ('var REAL = {' ․ՆՏ ․ՁԴ+)
	․ԵԼ('"name": {"en_US":"REAL"},' ․ՆՏ)
	․ԵԼ('"id": "REAL",' ․ՆՏ)
	․ԵԼ('"description": "",' ․ՆՏ)
	․ԵԼ('"type":	"585f3fef-7246-4612-8f24-b98d1a9ae8b7",' ․ՆՏ)
	․ԵԼ('"literal": "b4598a37-3126-42c1-a7b2-2906b12989f8"' ․ՆՏ)
	․ԵԼ(․ՁԴ- '}' ․ՆՏ)
	․ԵԼ('generateUuid =  JSON.parse(await metax.save(JSON.stringify(REAL), "applcation/json"));' ․ՆՏ)
	․ԵԼ('REAL.uuid  = generateUuid.uuid;' ․ՆՏ)
	․ԵԼ('tableUuid.REAL = generateUuid.uuid;' ․ՆՏ)
	․ԵԼ('await metax.save(JSON.stringify(REAL), "applcation/json", REAL.uuid);' ․ՆՏ)
	․ԵԼ('application.types.push(REAL.uuid);' ․ՆՏ ․ՆՏ)

	․ԵԼ('var LOGICAL = {' ․ՆՏ ․ՁԴ+)
	․ԵԼ('"name":{"en_US":	"LOGICAL"},' ․ՆՏ)
	․ԵԼ('"id":	"LOGICAL",' ․ՆՏ)
	․ԵԼ('"description":	"",' ․ՆՏ)
	․ԵԼ('"type":	"585f3fef-7246-4612-8f24-b98d1a9ae8b7",' ․ՆՏ)
	․ԵԼ('"literal": "b4598a37-3126-42c1-a7b2-2906b12989f8"' ․ՆՏ)
	․ԵԼ(․ՁԴ- '}' ․ՆՏ)
	․ԵԼ('generateUuid =  JSON.parse(await metax.save(JSON.stringify(LOGICAL), "applcation/json"));' ․ՆՏ)
	․ԵԼ('LOGICAL.uuid  = generateUuid.uuid;' ․ՆՏ)
	․ԵԼ('tableUuid.LOGICAL = generateUuid.uuid;' ․ՆՏ)
	․ԵԼ('await metax.save(JSON.stringify(LOGICAL), "applcation/json", LOGICAL.uuid);' ․ՆՏ)
	․ԵԼ('application.types.push(LOGICAL.uuid);' ․ՆՏ ․ՆՏ)

	․ԵԼ('var INTEGER = {' ․ՆՏ ․ՁԴ+)
	․ԵԼ('"name":{"en_US":	"INTEGER"},' ․ՆՏ)
	․ԵԼ('"id":	"INTEGER",' ․ՆՏ)
	․ԵԼ('"description":	"",' ․ՆՏ)
	․ԵԼ('"type":	"585f3fef-7246-4612-8f24-b98d1a9ae8b7",' ․ՆՏ)
	․ԵԼ('"literal": "b4598a37-3126-42c1-a7b2-2906b12989f8"' ․ՆՏ)
	․ԵԼ(․ՁԴ- '}' ․ՆՏ)
	․ԵԼ('generateUuid =  JSON.parse(await metax.save(JSON.stringify(INTEGER), "applcation/json"));' ․ՆՏ)
	․ԵԼ('INTEGER.uuid  = generateUuid.uuid;' ․ՆՏ)
	․ԵԼ('tableUuid.INTEGER= generateUuid.uuid;' ․ՆՏ)
	․ԵԼ('await metax.save(JSON.stringify(INTEGER), "applcation/json", INTEGER.uuid);' ․ՆՏ)
	․ԵԼ('application.types.push(INTEGER.uuid);' ․ՆՏ ․ՆՏ)

	․ԵԼ('var BINARY = {' ․ՆՏ ․ՁԴ+)
	․ԵԼ('"name": {"en_US":"BINARY"},' ․ՆՏ)
	․ԵԼ('"id": "BINARY",' ․ՆՏ)
	․ԵԼ('"description": "",' ․ՆՏ)
	․ԵԼ('"type": "585f3fef-7246-4612-8f24-b98d1a9ae8b7",' ․ՆՏ)
	․ԵԼ('"literal": "b4598a37-3126-42c1-a7b2-2906b12989f8"' ․ՆՏ)
	․ԵԼ(․ՁԴ- '}' ․ՆՏ)
	․ԵԼ('generateUuid = JSON.parse(await metax.save(JSON.stringify(BINARY), "applcation/json"));' ․ՆՏ)
	․ԵԼ('BINARY.uuid  = generateUuid.uuid;' ․ՆՏ)
	․ԵԼ('tableUuid.BINARY= generateUuid.uuid;' ․ՆՏ)
	․ԵԼ('await metax.save(JSON.stringify(BINARY), "applcation/json", BINARY.uuid);' ․ՆՏ)
	․ԵԼ('application.types.push(BINARY.uuid);' ․ՆՏ ․ՆՏ)
	;

ՍԽԵՄԱ = 'SCHEMA' ՏԱՐԲԵՐԱՆՇԱՆ ';'
	ԵԼ_ՍԽԵՄԱ_ՆԱԽԱԲԱՆ
        { ՏԱՐՐ }
        'END_SCHEMA' ';' ;

ՎԵՐՋԱԲԱՆ =
    ․ԵԼ('await add_incompletetypes();' ․ՆՏ)
    ․ԵԼ('const p = "./schema_uuids/" + applicationId + "_uuids.json";' ․ՆՏ)
    ․ԵԼ('const JSONToFile = (obj) =>' ․ՆՏ)
    ․ԵԼ('fs.writeFileSync(p, JSON.stringify(obj, null, 2));' ․ՆՏ)
    ․ԵԼ('JSONToFile(tableUuid);' ․ՆՏ)
    ․ԵԼ('await metax.save(JSON.stringify(application), "applcation/json", application.uuid);' ․ՆՏ)
    ․ԵԼ('await metax.save(JSON.stringify(mainUUID), "applcation/json", mainUUID.uuid);' ․ՆՏ)
    ․ԵԼ('process.exit(0);' ․ՆՏ)
    ․ԵԼ('} // close add_types function' ․ՆՏ ․ՆՏ)
    ․ԵԼ('async function add_incompletetypes()' ․ՆՏ '{' ․ՆՏ ․ՁԴ+)
    ․ԵԼ('let a = {};' ․ՆՏ)
    ․ԵԼ('for (var i = 0; i < IncompleteTypes.length; i++) {' ․ՆՏ ․ՁԴ+)
        ․ԵԼ('switch (IncompleteTypes[i].first) {' ․ՆՏ ․ՁԴ+)
            ․ԵԼ('case "type":' ․ՆՏ ․ՁԴ+)
                ․ԵԼ('a = JSON.parse(await metax.get(tableUuid[IncompleteTypes[i].second]));' ․ՆՏ)
                ․ԵԼ('if (tableUuid[IncompleteTypes[i].fourth]) {' ․ՆՏ ․ՁԴ+)
                    ․ԵԼ('IncompleteTypes[i].third.value_type  = tableUuid[IncompleteTypes[i].fourth];' ․ՆՏ)
                    ․ԵԼ('a.properties.push(IncompleteTypes[i].third);' ․ՆՏ)
                    ․ԵԼ('await metax.save(JSON.stringify(a), "applcation/json", a.uuid);' ․ՆՏ)
                ․ԵԼ(․ՁԴ- '} else {' ․ՆՏ ․ՁԴ+)
                    ․ԵԼ('var temp = IncompleteTypes[i];' ․ՆՏ)
                    ․ԵԼ('IncompleteTypes[i] = IncompleteTypes[IncompleteTypes.length - 1];' ․ՆՏ)
                    ․ԵԼ('IncompleteTypes[IncompleteTypes.length - 1] = temp;' ․ՆՏ)
                    ․ԵԼ('i--;' ․ՆՏ)
                ․ԵԼ(․ՁԴ- '}' ․ՆՏ)
                ․ԵԼ('a = {};' ․ՆՏ)
                ․ԵԼ('break;' ․ՆՏ)

			․ԵԼ(․ՁԴ- 'case "cl_type":' ․ՆՏ ․ՁԴ+)
				․ԵԼ('a = JSON.parse(await metax.get(tableUuid[IncompleteTypes[i].second]));' ․ՆՏ)
				․ԵԼ('if (tableUuid[IncompleteTypes[i].fourth]) {' ․ՆՏ ․ՁԴ+)
					․ԵԼ('a.collections[0].element_type = tableUuid[IncompleteTypes[i].fourth];' ․ՆՏ)
					․ԵԼ('await metax.save(JSON.stringify(a), "applcation/json", a.uuid);' ․ՆՏ)
				․ԵԼ(․ՁԴ- '} else {' ․ՆՏ ․ՁԴ+)
					․ԵԼ('var temp = IncompleteTypes[i];' ․ՆՏ)
					․ԵԼ('IncompleteTypes[i] = IncompleteTypes[IncompleteTypes.length - 1];' ․ՆՏ)
					․ԵԼ('IncompleteTypes[IncompleteTypes.length - 1] = temp;' ․ՆՏ)
					․ԵԼ('i--;' ․ՆՏ)
				․ԵԼ(․ՁԴ- '}' ․ՆՏ)
				․ԵԼ('a = {};' ․ՆՏ)
				․ԵԼ('break;' ․ՆՏ)

			․ԵԼ(․ՁԴ- 'case "select":' ․ՆՏ ․ՁԴ+)
				․ԵԼ('a = JSON.parse(await metax.get(tableUuid[IncompleteTypes[i].second]));' ․ՆՏ)
				․ԵԼ('if (tableUuid[IncompleteTypes[i].fourth]) {' ․ՆՏ ․ՁԴ+)
					․ԵԼ('a.values.push(tableUuid[IncompleteTypes[i].fourth]);' ․ՆՏ)
					․ԵԼ('await metax.save(JSON.stringify(a), "applcation/json", a.uuid);' ․ՆՏ)
				․ԵԼ(․ՁԴ- '} else {' ․ՆՏ ․ՁԴ+)
					․ԵԼ('var temp = IncompleteTypes[i];' ․ՆՏ)
					․ԵԼ('IncompleteTypes[i] = IncompleteTypes[IncompleteTypes.length - 1];' ․ՆՏ)
					․ԵԼ('IncompleteTypes[IncompleteTypes.length - 1] = temp;' ․ՆՏ)
					․ԵԼ('i--;' ․ՆՏ)
				․ԵԼ(․ՁԴ- '}' ․ՆՏ)
				․ԵԼ('a = {};' ․ՆՏ)
				․ԵԼ('break;' ․ՆՏ)

			․ԵԼ(․ՁԴ- 'case "parent_entity":' ․ՆՏ ․ՁԴ+)
               ․ԵԼ('a = JSON.parse(await metax.get(tableUuid[IncompleteTypes[i].second]));' ․ՆՏ)
                ․ԵԼ('if (tableUuid[IncompleteTypes[i].fourth]) {' ․ՆՏ ․ՁԴ+)
                    ․ԵԼ('IncompleteTypes[i].third.value_type  = tableUuid[IncompleteTypes[i].fourth];' ․ՆՏ)
                    ․ԵԼ('a.properties.push(IncompleteTypes[i].third);' ․ՆՏ)
                    ․ԵԼ('await metax.save(JSON.stringify(a), "applcation/json", a.uuid);' ․ՆՏ)
                ․ԵԼ(․ՁԴ- '} else {' ․ՆՏ ․ՁԴ+)
                    ․ԵԼ('var temp = IncompleteTypes[i];' ․ՆՏ)
                    ․ԵԼ('IncompleteTypes[i] = IncompleteTypes[IncompleteTypes.length - 1];' ․ՆՏ)
                    ․ԵԼ('IncompleteTypes[IncompleteTypes.length - 1] = temp;' ․ՆՏ)
                    ․ԵԼ('i--;' ․ՆՏ)
                ․ԵԼ(․ՁԴ- '}' ․ՆՏ)
                ․ԵԼ('a = {};' ․ՆՏ)
                ․ԵԼ('break;' ․ՆՏ)


			․ԵԼ(․ՁԴ- 'case "pr_entity":' ․ՆՏ ․ՁԴ+)
                ․ԵԼ('a = JSON.parse(await metax.get(tableUuid[IncompleteTypes[i].second]));' ․ՆՏ)
                ․ԵԼ('if (tableUuid[IncompleteTypes[i].fourth]) {' ․ՆՏ ․ՁԴ+)
                    ․ԵԼ('IncompleteTypes[i].third.value_type = tableUuid[IncompleteTypes[i].fourth];' ․ՆՏ)
                    ․ԵԼ('a.properties.push(IncompleteTypes[i].third);' ․ՆՏ)
                    ․ԵԼ('await metax.save(JSON.stringify(a), "applcation/json", a.uuid);' ․ՆՏ)
                ․ԵԼ(․ՁԴ- '} else {' ․ՆՏ ․ՁԴ+)
                    ․ԵԼ('var temp = IncompleteTypes[i];' ․ՆՏ)
                    ․ԵԼ('IncompleteTypes[i] = IncompleteTypes[IncompleteTypes.length - 1];' ․ՆՏ)
                    ․ԵԼ('IncompleteTypes[IncompleteTypes.length - 1] = temp;' ․ՆՏ)
                    ․ԵԼ('i--;' ․ՆՏ)
                ․ԵԼ(․ՁԴ- '}' ․ՆՏ)
                ․ԵԼ('a = {};' ․ՆՏ)
                ․ԵԼ('break;' ․ՆՏ)

			․ԵԼ(․ՁԴ- 'case "cl_entity":' ․ՆՏ ․ՁԴ+)
				․ԵԼ('a = JSON.parse(await metax.get(tableUuid[IncompleteTypes[i].second]));' ․ՆՏ)
				․ԵԼ('if (tableUuid[IncompleteTypes[i].fourth]) {' ․ՆՏ ․ՁԴ+)
					
				․ԵԼ('if (tableChildren["' * '"]) {' ․ՆՏ ․ՁԴ+)
					․ԵԼ('allowedValues.push("' * '");' ․ՆՏ)
					․ԵԼ('for (const ind in tableChildren["' * '"]) {' ․ՆՏ ․ՁԴ+)
						․ԵԼ('allowedValues.push(tableChildren["' * '"][ind]);' ․ՆՏ)
						․ԵԼ('AddChildren(tableChildren["' * '"][ind], allowedValues);' ․ՆՏ)
					․ԵԼ(․ՁԴ- '}' ․ՆՏ)
					․ԵԼ('collection.allowed_values = allowedValues;' ․ՆՏ)
					․ԵԼ(' allowedValues = [];' ․ՆՏ)
					․ԵԼ('IncompleteTypes[i].third.element_type = "a480317b-b7fa-4b81-8f19-ccb9224f3604";' ․ՆՏ)
				․ԵԼ(․ՁԴ- '} else {' ․ՆՏ ․ՁԴ+)
						․ԵԼ('IncompleteTypes[i].third.element_type = tableUuid[IncompleteTypes[i].fourth];' ․ՆՏ)
					․ԵԼ(․ՁԴ- '}' ․ՆՏ)
					․ԵԼ('a.collections.push(IncompleteTypes[i].third);' ․ՆՏ)
					․ԵԼ('await metax.save(JSON.stringify(a), "applcation/json", a.uuid);' ․ՆՏ)
				․ԵԼ(․ՁԴ- '} else {' ․ՆՏ ․ՁԴ+)
					․ԵԼ('var temp = IncompleteTypes[i];' ․ՆՏ)
					․ԵԼ('IncompleteTypes[i] = IncompleteTypes[IncompleteTypes.length - 1];' ․ՆՏ)
					․ԵԼ('IncompleteTypes[IncompleteTypes.length - 1] = temp;' ․ՆՏ)
					․ԵԼ('i--;' ․ՆՏ)
				․ԵԼ(․ՁԴ- '}' ․ՆՏ)
				․ԵԼ('a = {};' ․ՆՏ)
				․ԵԼ('break;' ․ՆՏ)

			․ԵԼ(․ՁԴ- 'default:' ․ՆՏ ․ՁԴ+)
				․ԵԼ('console.log("Selected case is not recognized.");' ․ՆՏ)
				․ԵԼ('break;' ․ՆՏ)
	․ԵԼ(․ՁԴ- ․ՁԴ- '}' ․ՆՏ ․ՁԴ- '}' ․ՆՏ ․ՁԴ- '}' ․ՆՏ)
	;

ՏԱՐՐ = (ՏԻՊ_ՅԱՅՏԱՐԱՐՈՒՄ | ՈԲԵԿՏ | ԱՌՈՅԹ | ԿԱՆԱՒՆ) | ՄԵԿՆԱԲԱՆՈՒԹԻՒՆ ;


	# Տիպեր
# կարող է լինել հիմնական պարզ տիպերից մեկը կամ սահմանուած (տիպ_յայտարարումի մէջ փոխել)
ՏԻՊ_ՅՂՈՒՄ = ՏԱՐԲԵՐԱՆՇԱՆ;

ՏԻՊ_ՅՂՈՒՄ2 = ՆԵՐԴՐՈՒԱԾ_ՏԻՊ_ՅՂՈՒՄ | ԸՆԴՀԱՆՈՒՐ_ՏԻՊ | ՍԱՀՄԱՆՈՒԱԾ_ՏԻՊ_ՅՂՈՒՄ ;

ՍԱՀՄԱՆՈՒԱԾ_ՏԻՊ_ՅՂՈՒՄ = ՏԱՐԲԵՐԱՆՇԱՆ ; #․ԵԼ(* '_uuid') 

ՆԵՐԴՐՈՒԱԾ_ՏԻՊ_ՅՂՈՒՄ = ԹԻՒ_ՏԻՊ_ՅՂՈՒՄ | ՏՐԱԲԱՆԱԿԱՆ_ՏԻՊ_ՅՂՈՒՄ | ՏՈՂ_ՏԻՊԵՐ_ՅՂՈՒՄ | ԶԱՆԳՈՒԱԾ_ՏԻՊԵՐ_ՅՂՈՒՄ ;

ԹԻՒ_ՏԻՊ_ՅՂՈՒՄ = 'NUMBER' | 'INTEGER' | 'REAL' ;  #․ԵԼ('number_uuid')

ՏՐԱԲԱՆԱԿԱՆ_ՏԻՊ_ՅՂՈՒՄ = 'BOOLEAN' | 'LOGICAL' ;

ՏՈՂ_ՏԻՊԵՐ_ՅՂՈՒՄ = ('STRING' | 'BINARY')
		(ՏՈՂ_ՉԱՓ_ՅՂՈՒՄ | ․ԴԱՏԱՐԿ ) ;
ՏՈՂ_ՉԱՓ_ՅՂՈՒՄ = '(' ԹԻՒ ')' ('FIXED' | ․ԴԱՏԱՐԿ );

# delete this case?
ԶԱՆԳՈՒԱԾ_ՏԻՊԵՐ_ՅՂՈՒՄ = ԶԱՆԳՈՒԱԾ_ՏԻՊ_ՅՂՈՒՄ ; # | ՑԱՆԿ_ՏԻՊ | ՀԱՒԱՔԱԾՈՒ_ՏԻՊ
ԶԱՆԳՈՒԱԾ_ՉԱՓ_ՅՂՈՒՄ = '[' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ ':' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ ']' ; #(ԹԻՒ | '?' | ՏԱՐԲԵՐԱՆՇԱՆ)

ԶԱՆԳՈՒԱԾ_ՏԻՊ_ՅՂՈՒՄ = ('ARRAY' | 'LIST' | 'SET') (ԶԱՆԳՈՒԱԾ_ՉԱՓ_ՅՂՈՒՄ | ․ԴԱՏԱՐԿ) 'OF' ('UNIQUE' | ․ԴԱՏԱՐԿ) ՏԻՊ_ՅՂՈՒՄ2 ;

ԸՆԴՀԱՆՈՒՐ_ՏԻՊ = 'GENERIC' ':' ՏԱՐԲԵՐԱՆՇԱՆ ;



	# Տիպի յայտարարում

ՏԻՊ_ՅԱՅՏԱՐԱՐՈՒՄ = 'TYPE' ՏԱՐԲԵՐԱՆՇԱՆ ․ԱՒԵԼԱՑՆԵԼ('Տիպի_անուն', *)
	ԵԼ_ՏԻՊ_ՅԱՅՏԱՐԱՐՈՒՄ_ՆԱԽԱԲԱՆ
	'=' ՏԻՊ ';'
	ՀԻՄՆԱԿԱՆ_ՅԱՏԿԱՆԻՇՆԵՐ
	(ՏԻՊ_ՍԱՀՄԱՆԱՓԱԿՈՒՄ | ․ԴԱՏԱՐԿ)
	․ԵԼ('await metax.save(JSON.stringify(' ․ՍՏԱՆԱԼ'Տիպի_անուն' '), "applcation/json", ' ․ՍՏԱՆԱԼ'Տիպի_անուն' '.uuid);' ․ՆՏ)
	․ԵԼ('application.types.push(' ․ՍՏԱՆԱԼ'Տիպի_անուն' '.uuid);' ․ՆՏ ․ՆՏ ․ՆՏ)
	'END_TYPE' ';' ;

# կամ Տիպի_անուն
ԵԼ_ՏԻՊ_ՅԱՅՏԱՐԱՐՈՒՄ_ՆԱԽԱԲԱՆ =
	․ԵԼ('var ' * ' = {' ․ՁԴ+ ․ՆՏ)
		․ԵԼ('"name": {"en_US":"' * '"},' ․ՆՏ)
		․ԵԼ('"id": "' * '",' ․ՆՏ)
		․ԵԼ('"description": "",' ․ՆՏ)
        ․ԵԼ('"type": "585f3fef-7246-4612-8f24-b98d1a9ae8b7",' ․ՆՏ)
		․ԵԼ('"methods": [],' ․ՆՏ)
		․ԵԼ('"properties": [],' ․ՆՏ)
		․ԵԼ('"is_typedef": "b4598a37-3126-42c1-a7b2-2906b12989f8",' ․ՆՏ) ;

ԵԼ_ՊԱՐԶ_ՏԻՊ_ՇԱՐՈՒՆԱԿՈՒԹԻՒՆ =
	․ԵԼ('"properties": [' ․ՆՏ ․ՁԴ+)
		․ԵԼ('{' ․ՆՏ ․ՁԴ+)
			․ԵԼ('"id": "value",' ․ՆՏ)
			․ԵԼ('"name": {"en_US":"value"},' ․ՆՏ)
			․ԵԼ('"description": "",' ․ՆՏ)
			․ԵԼ('"mandatory": "b4598a37-3126-42c1-a7b2-2906b12989f8",' ․ՆՏ)
			․ԵԼ('"readonly": "df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
			․ԵԼ('"visible": "b4598a37-3126-42c1-a7b2-2906b12989f8",' ․ՆՏ)
			․ԵԼ('"type": "0d71b3a2-c167-449c-877b-5a3eb0e42089"' ․ՆՏ)
		․ԵԼ(․ՁԴ- '}' ․ՆՏ)
	․ԵԼ(․ՁԴ- ']' ․ՆՏ)
	ԵԼ_ՏԻՊ_ՇԱՐՈՒՆԱԿՈՒԹԻՒՆ
	․ԵԼ('typeUuid = tableUuid.' ․ՍՏԱՆԱԼ'Տիպ' ';' ․ՆՏ)
	․ԵԼ(* '.properties[0].value_type = typeUuid;' ․ՆՏ ․ՆՏ)
	;

ՀԻՄՆԱԿԱՆ_ՅԱՏԿԱՆԻՇՆԵՐ =
	․ԵԼ('property = {"id": "name",' ․ՁԴ+ ․ՆՏ)
	․ԵԼ('"name":{"en_US": "name"},' ․ՆՏ)
	․ԵԼ('"value_type":"71b30d14-59f8-482d-993d-c913e8737f9e",' ․ՆՏ)
	․ԵԼ('"mandatory":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"default_value":"",' ․ՆՏ)
	․ԵԼ('"readonly":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"description":"",' ․ՆՏ)
	․ԵԼ('"visible":"b4598a37-3126-42c1-a7b2-2906b12989f8",' ․ՆՏ)
	․ԵԼ('"visible_in_list_view":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"enable_internalization":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"enable_version_tracking":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"type":"0d71b3a2-c167-449c-877b-5a3eb0e42089",' ․ՆՏ)
	․ԵԼ('"visible_in_tree_view":"df868f39-896b-431b-b699-e71b4233eaf8"},' ․ՆՏ)
	․ԵԼ(․ՍՏԱՆԱԼ'Տիպի_անուն' '.properties.push(property);' ․ՆՏ)
	․ԵԼ('property = {"id": "uuid",' ․ՁԴ+ ․ՆՏ)
	․ԵԼ('"name": {"en_US":"uuid"},' ․ՆՏ)
	․ԵԼ('"value_type":"a480317b-b7fa-4b81-8f19-ccb9224f3604",' ․ՆՏ)
	․ԵԼ('"mandatory":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"default_value":"",' ․ՆՏ)
	․ԵԼ('"readonly":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"description":"",' ․ՆՏ)
	․ԵԼ('"visible":"b4598a37-3126-42c1-a7b2-2906b12989f8",' ․ՆՏ)
	․ԵԼ('"visible_in_list_view":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"enable_internalization":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"enable_version_tracking":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"type":"0d71b3a2-c167-449c-877b-5a3eb0e42089",' ․ՆՏ)
	․ԵԼ('"visible_in_tree_view":"df868f39-896b-431b-b699-e71b4233eaf8"};' ․ՆՏ)
	․ԵԼ(․ՍՏԱՆԱԼ'Տիպի_անուն' '.properties.push(property);' ․ՆՏ)
	․ԵԼ('property = {"id":"type",' ․ՁԴ+ ․ՆՏ)
	․ԵԼ('"name":{"en_US": "type"},' ․ՆՏ)
	․ԵԼ('"value_type":"585f3fef-7246-4612-8f24-b98d1a9ae8b7",' ․ՆՏ)
	․ԵԼ('"mandatory":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"default_value":"",' ․ՆՏ)
	․ԵԼ('"readonly":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"description":"",' ․ՆՏ)
	․ԵԼ('"visible":"b4598a37-3126-42c1-a7b2-2906b12989f8",' ․ՆՏ)
	․ԵԼ('"visible_in_list_view":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"enable_internalization":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"enable_version_tracking":"df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
	․ԵԼ('"type":"0d71b3a2-c167-449c-877b-5a3eb0e42089",' ․ՆՏ)
	․ԵԼ('"visible_in_tree_view":"df868f39-896b-431b-b699-e71b4233eaf8"};' ․ՆՏ)
	․ԵԼ(․ՍՏԱՆԱԼ'Տիպի_անուն' '.properties.push(property);' ․ՆՏ)
	;

# կամ Տիպի_անուն ՞՞
ԵԼ_ՏԻՊ_ՇԱՐՈՒՆԱԿՈՒԹԻՒՆ =
․ԵԼ(․ՁԴ- '};' ․ՆՏ ․ՆՏ)
	․ԵԼ('generateUuid = JSON.parse(await metax.save(JSON.stringify(' ․ՍՏԱՆԱԼ'Տիպի_անուն' '), "applcation/json"));' ․ՆՏ)
	․ԵԼ(․ՍՏԱՆԱԼ'Տիպի_անուն' '.uuid = generateUuid.uuid;' ․ՆՏ)
	․ԵԼ('tableUuid.' ․ՍՏԱՆԱԼ'Տիպի_անուն' ' = generateUuid.uuid;' ․ՆՏ ․ՆՏ)
	;

ԵԼ_ՊԱՐԶ_ՏԻՊ_ՆԱԽԱԲԱՆ =
	․ԵԼ('"is_typedef": "b4598a37-3126-42c1-a7b2-2906b12989f8",' ․ՆՏ)
	․ԵԼ('"properties": [' ․ՆՏ ․ՁԴ+ '{' ․ՆՏ)
		․ԵԼ('"id":"value",' ․ՆՏ)
		․ԵԼ('"name":{"en_US": "value"},' ․ՆՏ)
		․ԵԼ('"description": "",' ․ՆՏ)
		․ԵԼ('"mandatory": "b4598a37-3126-42c1-a7b2-2906b12989f8",' ․ՆՏ)
		․ԵԼ('"readonly": "df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
		․ԵԼ('"visible": "b4598a37-3126-42c1-a7b2-2906b12989f8",' ․ՆՏ)
		․ԵԼ('"type": "property_specification_uuid",' ․ՆՏ)
		․ԵԼ('"value_type": "') ;

ՏԻՊ_ՍԱՀՄԱՆԱՓԱԿՈՒՄ = WHERE ;

ՏԻՊ = ՆԵՐԴՐՈՒԱԾ_ՏԻՊ | ՍԱՀՄԱՆՈՒԱԾ_ՏԻՊ ;

ՍԱՀՄԱՆՈՒԱԾ_ՏԻՊ = ԵԼ_ՏԻՊ_ՇԱՐՈՒՆԱԿՈՒԹԻՒՆ ՏԱՐԲԵՐԱՆՇԱՆ
    ․ԵԼ('baseProperty = {' ․ՆՏ ․ՁԴ+)
            ․ԵԼ('"id":"Base",' ․ՆՏ)
            ․ԵԼ('"name":{"en_US": "Base object" },' ․ՆՏ)
            ․ԵԼ('"description": "",' ․ՆՏ)
            ․ԵԼ('"mandatory": "b4598a37-3126-42c1-a7b2-2906b12989f8",' ․ՆՏ)
            ․ԵԼ('"readonly": "df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
            ․ԵԼ('"visible": "b4598a37-3126-42c1-a7b2-2906b12989f8",' ․ՆՏ)
            ․ԵԼ('"type": "0d71b3a2-c167-449c-877b-5a3eb0e42089"' ․ՆՏ)
    ․ԵԼ(․ՁԴ- '};' ․ՆՏ)
    ․ԵԼ('typeUuid = tableUuid.' * ';' ․ՆՏ)
    ․ԵԼ('if (typeUuid) {' ․ՆՏ ․ՁԴ+)
        ․ԵԼ('baseProperty.value_type = typeUuid;' ․ՆՏ)
        ․ԵԼ(․ՍՏԱՆԱԼ'Տիպի_անուն' '.properties.push(baseProperty);' ․ՆՏ)
    ․ԵԼ(․ՁԴ- '} else {' ․ՆՏ ․ՁԴ+)
        ․ԵԼ('IncompleteTypes.push( new Structure("type", "' ․ՍՏԱՆԱԼ'Տիպի_անուն' '", baseProperty, "' * '") );' ․ՆՏ)
    ․ԵԼ(․ՁԴ- '}' ․ՆՏ ․ՆՏ) ;


ՆԵՐԴՐՈՒԱԾ_ՏԻՊ = (ԹԻՒ_ՏԻՊ | ՏՐԱԲԱՆԱԿԱՆ_ՏԻՊ) ԵԼ_ՊԱՐԶ_ՏԻՊ_ՇԱՐՈՒՆԱԿՈՒԹԻՒՆ | ՏՈՂ_ՏԻՊԵՐ | ԶԱՆԳՈՒԱԾ_ՏԻՊԵՐ | ԹՈՒԱՐԿՄԱՆ_ՏԻՊ | ԸՆՏՐԵԼ_ՏԻՊ;

ԹԻՒ_ՏԻՊ = 'NUMBER'  ․ԱՒԵԼԱՑՆԵԼ('Տիպ', 'NUMBER')
	| 'INTEGER' ․ԱՒԵԼԱՑՆԵԼ('Տիպ', 'INTEGER')
	| 'REAL'    ․ԱՒԵԼԱՑՆԵԼ('Տիպ', 'REAL') ;

ՏՐԱԲԱՆԱԿԱՆ_ՏԻՊ = 'BOOLEAN'  ․ԱՒԵԼԱՑՆԵԼ('Տիպ', 'BOOLEAN')
		| 'LOGICAL' ․ԱՒԵԼԱՑՆԵԼ('Տիպ', 'LOGICAL') ;

ՏՈՂ_ՏԻՊԵՐ = ('STRING' ․ԱՒԵԼԱՑՆԵԼ('Տիպ', 'STRING') |
	     'BINARY' ․ԱՒԵԼԱՑՆԵԼ('Տիպ', 'BINARY'))
	ԵԼ_ՊԱՐԶ_ՏԻՊ_ՇԱՐՈՒՆԱԿՈՒԹԻՒՆ
	․ԵԼ(* '.lenght = ') (ՏՈՂ_ՉԱՓ | ․ԴԱՏԱՐԿ ․ԵԼ('"-1";' ․ՆՏ * '.is_fixed = "df868f39-896b-431b-b699-e71b4233eaf8";' ․ՆՏ ․ՆՏ)) ;
ՏՈՂ_ՉԱՓ = '(' ԹԻՒ ․ԵԼ('"' * '"' ';' ․ՆՏ) ')' ('FIXED' ․ԵԼ(․ՍՏԱՆԱԼ'Տիպի_անուն' '.is_fixed = "b4598a37-3126-42c1-a7b2-2906b12989f8";' ․ՆՏ ․ՆՏ)
	| ․ԴԱՏԱՐԿ ․ԵԼ(․ՍՏԱՆԱԼ'Տիպի_անուն' '.is_fixed = "df868f39-896b-431b-b699-e71b4233eaf8";' ․ՆՏ ․ՆՏ)) ;

ԶԱՆԳՈՒԱԾ_ՏԻՊԵՐ = ('ARRAY'․ԵԼ('"collection_type" : "ARRAY",' ․ՆՏ) |
		  'LIST' ․ԵԼ('"collection_type" : "LIST",' ․ՆՏ)  |
		  'SET'  ․ԵԼ('"collection_type" : "SET",' ․ՆՏ))
		ԶԱՆԳՈՒԱԾ_ՏԻՊ_ՇԱՐՈՒՆԱԿՈՒԹԻՒՆ ;

ԶԱՆԳՈՒԱԾ_ՉԱՓ = '[' ԹԻՒ ․ԵԼ('"min_length": ' '"' * '"' ',' ․ՆՏ) ':'
		․ԵԼ('"max_length": ') (ԹԻՒ ․ԵԼ('"' * '"') | '?' ․ԵԼ('"-1"')) ․ԵԼ(',' ․ՆՏ) ']' ;

		
# or զանգուած_տիպ
ԶԱՆԳՈՒԱԾ_ՏԻՊ_ՇԱՐՈՒՆԱԿՈՒԹԻՒՆ = ԶԱՆԳՈՒԱԾ_ՉԱՓ 'OF'
			․ԵԼ('"is_unique": "') ('UNIQUE' ․ԵԼ('b4598a37-3126-42c1-a7b2-2906b12989f8') | ․ԴԱՏԱՐԿ ․ԵԼ('df868f39-896b-431b-b699-e71b4233eaf8')) ․ԵԼ('",' ․ՆՏ)
			ՏԻՊ_ՅՂՈՒՄ ԵԼ_ԶԱՆԳՈՒԱԾ_ՏԻՊ
			ԵԼ_ՏԻՊ_ՇԱՐՈՒՆԱԿՈՒԹԻՒՆ
			ԵԼ_ԶԱՆԳՈՒԱԾ_ՏԻՊ_ՎԵՐՋԱԲԱՆ ;

ԵԼ_ԶԱՆԳՈՒԱԾ_ՏԻՊ =
		․ԵԼ('"collections": [' ․ՆՏ ․ՁԴ+)
                	․ԵԼ('{' ․ՆՏ ․ՁԴ+ '"id": "' * '",' ․ՆՏ)
				․ԵԼ('"name": {"en_US":"' * '"},' ․ՆՏ)
                        	․ԵԼ('"kind": "owned_collection_uuid"' ․ՆՏ)
                ․ԵԼ(․ՁԴ- '}' ․ՆՏ ․ՁԴ- '],' ․ՆՏ);

ԵԼ_ԶԱՆԳՈՒԱԾ_ՏԻՊ_ՎԵՐՋԱԲԱՆ =
		․ԵԼ('typeUuid = tableUuid.' * ';' ․ՆՏ)
		․ԵԼ('if (typeUuid) {' ․ՆՏ ․ՁԴ+)
			․ԵԼ(․ՍՏԱՆԱԼ'Տիպի_անուն' '.collections[0].element_type = typeUuid;' ․ՆՏ)
		․ԵԼ(․ՁԴ- '} else {' ․ՆՏ ․ՁԴ+)
			․ԵԼ('IncompleteTypes.push( new Structure("cl_type", "' ․ՍՏԱՆԱԼ'Տիպի_անուն' '", {}, "' * '") );' ․ՆՏ)
		․ԵԼ(․ՁԴ- '}' ․ՆՏ ․ՆՏ) ;


ԹՈՒԱՐԿՄԱՆ_ՏԻՊ = 'ENUMERATION' 'OF' ․ԵԼ('"values": []' ․ՆՏ)
		ԵԼ_ՏԻՊ_ՇԱՐՈՒՆԱԿՈՒԹԻՒՆ
		'(' ԹՈՒԱՐԿՄԱՆ_ԱՐԺԷՔ ')' ;
ԹՈՒԱՐԿՄԱՆ_ԱՐԺԷՔ = ՏԱՐԲԵՐԱՆՇԱՆ ԵԼ_ԹՈՒԱՐԿՄԱՆ_ԱՐԺԷՔ (',' ԹՈՒԱՐԿՄԱՆ_ԱՐԺԷՔ | ․ԴԱՏԱՐԿ) ;

ԵԼ_ԹՈՒԱՐԿՄԱՆ_ԱՐԺԷՔ =
	․ԵԼ('tname = "' ․ՍՏԱՆԱԼ'Տիպի_անուն' '_' * '";' ․ՆՏ)
	․ԵԼ('enumValue = {' ․ՆՏ ․ՁԴ+)
		․ԵԼ('"name": {"en_US":"' * '"},' ․ՆՏ)
		․ԵԼ('"type": ' ․ՍՏԱՆԱԼ'Տիպի_անուն' '.uuid,' ․ՆՏ)
		․ԵԼ('"id":   tname,' ․ՆՏ)
		․ԵԼ('"literal": "b4598a37-3126-42c1-a7b2-2906b12989f8"' ․ՆՏ)
	․ԵԼ(․ՁԴ- '}' ․ՆՏ)
	․ԵԼ('generateUuid = JSON.parse(await metax.save(JSON.stringify(enumValue), "applcation/json"));' ․ՆՏ)
	․ԵԼ('enumValue.uuid = generateUuid.uuid;' ․ՆՏ)
	․ԵԼ('tableUuid.tname = generateUuid.uuid;' ․ՆՏ)
	․ԵԼ('await metax.save(JSON.stringify(enumValue), "applcation/json", enumValue.uuid);' ․ՆՏ)
	․ԵԼ(․ՍՏԱՆԱԼ'Տիպի_անուն' '.values.push(generateUuid.uuid);' ․ՆՏ ․ՆՏ)
	;

ԸՆՏՐԵԼ_ՏԻՊ = 'SELECT' ․ԵԼ('"values": []' ․ՆՏ)
	ԵԼ_ՏԻՊ_ՇԱՐՈՒՆԱԿՈՒԹԻՒՆ
	'(' ԸՆՏՐԵԼ_ԱՐԺԷՔ ')' ;
ԸՆՏՐԵԼ_ԱՐԺԷՔ = ՍԱՀՄԱՆՈՒԱԾ_ՏԻՊ_ՅՂՈՒՄ ԵԼ_ԸՆՏՐԵԼ_ԱՐԺԷՔ (',' ԸՆՏՐԵԼ_ԱՐԺԷՔ | ․ԴԱՏԱՐԿ) ;

ԵԼ_ԸՆՏՐԵԼ_ԱՐԺԷՔ =
		․ԵԼ('typeUuid = tableUuid.' * ';' ․ՆՏ)
		․ԵԼ('if (typeUuid) {' ․ՆՏ ․ՁԴ+)
			․ԵԼ(․ՍՏԱՆԱԼ'Տիպի_անուն' '.values.push(typeUuid);' ․ՆՏ)
		․ԵԼ(․ՁԴ- '} else {' ․ՆՏ ․ՁԴ+)
			․ԵԼ('IncompleteTypes.push( new Structure("select", "' ․ՍՏԱՆԱԼ'Տիպի_անուն' '", {},  "' * '") );' ․ՆՏ)
		․ԵԼ(․ՁԴ- '}' ․ՆՏ ․ՆՏ)
		;


# Սահմանափակումներ

WHERE = 'WHERE' { WHERE_ՍԱՀՄԱՆԱՓԱԿՈՒՄ } ;

WHERE_ՍԱՀՄԱՆԱՓԱԿՈՒՄ = ՏԱՐԲԵՐԱՆՇԱՆ_ՏԻՊ ':' ՀԱՄԵՄԱՏՈՒԹԻՒՆ ';' ;



# ՀԱՄԵՄԱՏՈՒԹԻՒՆ in general?
ՀԱՄԵՄԱՏՈՒԹԻՒՆ = ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ ;

	# Entity

ՈԲԵԿՏ = 'ENTITY' ՏԱՐԲԵՐԱՆՇԱՆ ․ԱՒԵԼԱՑՆԵԼ('Տիպի_անուն', *)
	ԵԼ_ՈԲԵԿՏ_ՆԱԽԱԲԱՆ
	ՈԲԵԿՏ_ՏԻՊ ';'
	ՀԻՄՆԱԿԱՆ_ՅԱՏԿԱՆԻՇՆԵՐ
	{ ՅԱՏԿԱՆԻՇ ';' }
	{ ՈԲԵԿՏ_ՍԱՀՄԱՆԱՓԱԿՈՒՄ }
	․ԵԼ('await metax.save(JSON.stringify(' ․ՍՏԱՆԱԼ'Տիպի_անուն' '), "applcation/json", ' ․ՍՏԱՆԱԼ'Տիպի_անուն' '.uuid);' ․ՆՏ)
	․ԵԼ('application.types.push(' ․ՍՏԱՆԱԼ'Տիպի_անուն' '.uuid);' ․ՆՏ ․ՆՏ ․ՆՏ)
	'END_ENTITY' ';' ;

ՈԲԵԿՏ_ՏԻՊ = ('ABSTRACT' ԳԵՐՏԻՊ | ԳԵՐՏԻՊ | ․ԴԱՏԱՐԿ)
	(ԵՆԹԱՏԻՊ | ․ԴԱՏԱՐԿ ․ԵԼ(․ՆՏ)) ;
ԳԵՐՏԻՊ  = 'SUPERTYPE' 'OF' ․ԵԼ(* '.children = [];' ․ՆՏ)
'(' 'ONEOF' '(' ԳԵՐՏԻՊ_ԵՐԵԽԱ_ՏԻՊ { ',' ԳԵՐՏԻՊ_ԵՐԵԽԱ_ՏԻՊ } ')' ')' ․ԵԼ('tableChildren["' ․ՍՏԱՆԱԼ'Տիպի_անուն' '"] = ' ․ՍՏԱՆԱԼ'Տիպի_անուն'  '.children;' ․ՆՏ)
	;


# change this to object init?
ԳԵՐՏԻՊ_ԵՐԵԽԱ_ՏԻՊ = ՏԱՐԲԵՐԱՆՇԱՆ ․ԵԼ(․ՍՏԱՆԱԼ'Տիպի_անուն' '.children.push("' * '");' ․ՆՏ) ;

ԵՆԹԱՏԻՊ = 'SUBTYPE' 'OF' '(' ՏԱՐԲԵՐԱՆՇԱՆ ')' ԵԼ_ԵՆԹԱՏԻՊ ;

ԵԼ_ԵՆԹԱՏԻՊ =
    ․ԵԼ('baseProperty = {' ․ՆՏ ․ՁԴ+)
            ․ԵԼ('"id": "Base",' ․ՆՏ)
            ․ԵԼ('"name": {"en_US":"Base object"},' ․ՆՏ)
            ․ԵԼ('"index": index++,' ․ՆՏ)
            ․ԵԼ('"description": "",' ․ՆՏ)
            ․ԵԼ('"mandatory": "b4598a37-3126-42c1-a7b2-2906b12989f8",' ․ՆՏ)
            ․ԵԼ('"readonly": "df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
            ․ԵԼ('"visible": "b4598a37-3126-42c1-a7b2-2906b12989f8",' ․ՆՏ)
            ․ԵԼ('"type": "0d71b3a2-c167-449c-877b-5a3eb0e42089"' ․ՆՏ)
    ․ԵԼ(․ՁԴ- '};' ․ՆՏ)
    ․ԵԼ('typeUuid = tableUuid.' * ';' ․ՆՏ)
    ․ԵԼ('if (typeUuid) {' ․ՆՏ ․ՁԴ+)
        ․ԵԼ('baseProperty.value_type = typeUuid;' ․ՆՏ)
        ․ԵԼ(․ՍՏԱՆԱԼ'Տիպի_անուն' '.properties.push(baseProperty);' ․ՆՏ)
    ․ԵԼ(․ՁԴ- '} else {' ․ՆՏ ․ՁԴ+)
        ․ԵԼ('IncompleteTypes.push( new Structure("parent_entity", "' ․ՍՏԱՆԱԼ'Տիպի_անուն' '", baseProperty, "' * '") );' ․ՆՏ)
    ․ԵԼ(․ՁԴ- '}' ․ՆՏ ․ՆՏ) ;


ՅԱՏԿԱՆԻՇ = ՅԱՏԿԱՆԻՇ_ՍԿԻԶԲ
	(ՅԱՏԿԱՆԻՇ_ԶԱՆԳՈՒԱԾ_ՏԻՊ ․ԵԼ('"index": index++,' ․ՆՏ) ՅԱՏԿԱՆԻՇ_ԶԱՆԳՈՒԱԾ_ՏԻՊ_ՇԱՐՈՒՆԱԿՈՒԹԻՒՆ |
	 ԵԼ_ՈԲԵԿՏ_ՅԱՏԿԱՆԻՇ ՏԻՊ_ՅՂՈՒՄ ․ԵԼ('property.index = index++;' ․ՆՏ) ԵԼ_ՈԲԵԿՏ_ՅԱՏԿԱՆԻՇ_ՎԵՐՋԱԲԱՆ)
	;

ՅԱՏԿԱՆԻՇ_ՍԿԻԶԲ = ՏԱՐԲԵՐԱՆՇԱՆ_ՏԻՊ ․ԱՒԵԼԱՑՆԵԼ('Յատկանիշի_անուն', *) ':' 
		(ԸՆՏՐՈՎԻ | ․ԴԱՏԱՐԿ ․ԱՒԵԼԱՑՆԵԼ('Ընտրովի', 'b4598a37-3126-42c1-a7b2-2906b12989f8'))
		;
ԸՆՏՐՈՎԻ = 'OPTIONAL' ․ԱՒԵԼԱՑՆԵԼ('Ընտրովի', 'df868f39-896b-431b-b699-e71b4233eaf8') ;


ՅԱՏԿԱՆԻՇ_ԶԱՆԳՈՒԱԾ_ՏԻՊ = ('ARRAY' ԵԼ_ՅԱՏԿԱՆԻՇ_ԶԱՆԳՈՒԱԾ_ՏԻՊ_ՆԱԽԱԲԱՆ ․ԵԼ('"ARRAY",' ․ՆՏ) |
			 'LIST'  ԵԼ_ՅԱՏԿԱՆԻՇ_ԶԱՆԳՈՒԱԾ_ՏԻՊ_ՆԱԽԱԲԱՆ ․ԵԼ('"LIST",' ․ՆՏ)  |
			 'SET'   ԵԼ_ՅԱՏԿԱՆԻՇ_ԶԱՆԳՈՒԱԾ_ՏԻՊ_ՆԱԽԱԲԱՆ ․ԵԼ('"SET",' ․ՆՏ))
			;

ՅԱՏԿԱՆԻՇ_ԶԱՆԳՈՒԱԾ_ՏԻՊ_ՇԱՐՈՒՆԱԿՈՒԹԻՒՆ =
			ԶԱՆԳՈՒԱԾ_ՉԱՓ 'OF'
			․ԵԼ('"element_unique": "')
			 ('UNIQUE' ․ԵԼ('b4598a37-3126-42c1-a7b2-2906b12989f8') | ․ԴԱՏԱՐԿ ․ԵԼ('df868f39-896b-431b-b699-e71b4233eaf8')) ․ԵԼ('"' ․ՆՏ)
			․ԵԼ(․ՁԴ- '}' ․ՆՏ ․ՆՏ)
			( ԶԱՆԳՈՒԱԾ_ԶԱՆԳՈՒԱԾԻ_ՄԷՋ |
			  ՏԻՊ_ՅՂՈՒՄ ԵԼ_ՅԱՏԿԱՆԻՇ_ԶԱՆԳՈՒԱԾ_ՏԻՊ_ՎԵՐՋԱԲԱՆ) ;


ԶԱՆԳՈՒԱԾ_ԶԱՆԳՈՒԱԾԻ_ՄԷՋ = ('ARRAY' ԵԼ_ՅԱՏԿԱՆԻՇ_ԶԱՆԳՈՒԱԾ_ԶԱՆԳՈՒԱԾԻ_ՄԷՋ ․ԵԼ('"ARRAY",' ․ՆՏ) |
			  'LIST'  ԵԼ_ՅԱՏԿԱՆԻՇ_ԶԱՆԳՈՒԱԾ_ԶԱՆԳՈՒԱԾԻ_ՄԷՋ ․ԵԼ('"LIST",' ․ՆՏ)  |
			  'SET'   ԵԼ_ՅԱՏԿԱՆԻՇ_ԶԱՆԳՈՒԱԾ_ԶԱՆԳՈՒԱԾԻ_ՄԷՋ ․ԵԼ('"SET",' ․ՆՏ))
			ՅԱՏԿԱՆԻՇ_ԶԱՆԳՈՒԱԾ_ԶԱՆԳՈՒԱԾԻ_ՄԷՋ_ՇԱՐՈՒՆԱԿՈՒԹԻՒՆ ;

ՅԱՏԿԱՆԻՇ_ԶԱՆԳՈՒԱԾ_ԶԱՆԳՈՒԱԾԻ_ՄԷՋ_ՇԱՐՈՒՆԱԿՈՒԹԻՒՆ =
	ԶԱՆԳՈՒԱԾ_ՉԱՓ 'OF'
	․ԵԼ('"is_unique": "') ('UNIQUE' ․ԵԼ('b4598a37-3126-42c1-a7b2-2906b12989f8') | ․ԴԱՏԱՐԿ ․ԵԼ('df868f39-896b-431b-b699-e71b4233eaf8')) ․ԵԼ('",' ․ՆՏ)
	ՏԻՊ_ՅՂՈՒՄ
	ԵԼ_ՅԱՏԿԱՆԻՇ_ԶԱՆԳՈՒԱԾ_ԶԱՆԳՈՒԱԾԻ_ՄԷՋ_ՎԵՐՋԱԲԱՆ ;


# ․ՍՏԱՆԱԼ'Յատկանիշի_անուն'
ԵԼ_ՅԱՏԿԱՆԻՇ_ԶԱՆԳՈՒԱԾ_ՏԻՊ_ՆԱԽԱԲԱՆ =
	․ԵԼ('tname = "' * '";' ․ՆՏ)
	․ԵԼ('collection = {' ․ՆՏ ․ՁԴ+)
		․ԵԼ('"id": tname,' ․ՆՏ)
		․ԵԼ('"name":{"en_US": tname},' ․ՆՏ)
		․ԵԼ('"mandatory": "' ․ՍՏԱՆԱԼ'Ընտրովի' '",' ․ՆՏ)
		․ԵԼ('"type": "509465e1-0499-4d83-904b-3f16683ee917",' ․ՆՏ)
		․ԵԼ('"kind": "e1b550e2-47c3-4529-b9f5-4b6b0f8ada9f",' ․ՆՏ)
		․ԵԼ('"collection_type" : ')
		;

ԵԼ_ՅԱՏԿԱՆԻՇ_ԶԱՆԳՈՒԱԾ_ՏԻՊ_ՎԵՐՋԱԲԱՆ =
	․ԵԼ('typeUuid = tableUuid.' * ';' ․ՆՏ)
	․ԵԼ('if (typeUuid) {' ․ՆՏ ․ՁԴ+)
		․ԵԼ('if(tableChildren["' * '"]) {' ․ՆՏ ․ՁԴ+)
			․ԵԼ('typeUuid = "a480317b-b7fa-4b81-8f19-ccb9224f3604";' ․ՆՏ)
			․ԵԼ('if (tableChildren["' * '"]) {' ․ՆՏ ․ՁԴ+)
				․ԵԼ('allowedValues.push("' * '");' ․ՆՏ)
				․ԵԼ('for (const ind in tableChildren["' * '"]) {' ․ՆՏ ․ՁԴ+)
					․ԵԼ('allowedValues.push(tableChildren["' * '"][ind]);' ․ՆՏ)
					․ԵԼ('AddChildren(tableChildren["' * '"][ind], allowedValues);' ․ՆՏ)
				․ԵԼ(․ՁԴ- '}' ․ՆՏ)
			․ԵԼ(․ՁԴ- '}' ․ՆՏ)
			․ԵԼ('collection.allowed_values = allowedValues;' ․ՆՏ)
			․ԵԼ(' allowedValues = [];' ․ՆՏ)
		․ԵԼ(․ՁԴ- '}' ․ՆՏ)
		․ԵԼ('collection.element_type = typeUuid;' ․ՆՏ)
		․ԵԼ(․ՍՏԱՆԱԼ'Տիպի_անուն' '.collections.push(collection);' ․ՆՏ)
	․ԵԼ(․ՁԴ- ' } else {' ․ՆՏ ․ՁԴ+)
			․ԵԼ('IncompleteTypes.push( new Structure("cl_entity", "' ․ՍՏԱՆԱԼ'Տիպի_անուն' '", collection, "' * '") );' ․ՆՏ)
	․ԵԼ(․ՁԴ- '}' ․ՆՏ) ;

# ․ՍՏԱՆԱԼ'Յատկանիշի_անուն'
ԵԼ_ՅԱՏԿԱՆԻՇ_ԶԱՆԳՈՒԱԾ_ԶԱՆԳՈՒԱԾԻ_ՄԷՋ =
		․ԵԼ('subcollection = {' ․ՆՏ ․ՁԴ+)
			․ԵԼ('"mandatory": "' ․ՍՏԱՆԱԼ'Ընտրովի' '",' ․ՆՏ)
			․ԵԼ('"type": "585f3fef-7246-4612-8f24-b98d1a9ae8b7",' ․ՆՏ)
			․ԵԼ('"is_typedef" : "b4598a37-3126-42c1-a7b2-2906b12989f8",' ․ՆՏ)
			․ԵԼ('"description": "",' ․ՆՏ)
			․ԵԼ('"collection_type" : ')
			;

ԵԼ_ՅԱՏԿԱՆԻՇ_ԶԱՆԳՈՒԱԾ_ԶԱՆԳՈՒԱԾԻ_ՄԷՋ_ՎԵՐՋԱԲԱՆ =
		․ԵԼ('"collections": [' ․ՆՏ ․ՁԴ+)
			․ԵԼ('{' ․ՆՏ ․ՁԴ+ '"id": "' * '",' ․ՆՏ)
				․ԵԼ('"name": {"en_US":"' * '"},' ․ՆՏ)
				․ԵԼ('"kind": "e1b550e2-47c3-4529-b9f5-4b6b0f8ada9f"' ․ՆՏ)
		․ԵԼ(․ՁԴ- '}' ․ՆՏ ․ՁԴ- ']' ․ՆՏ)
	․ԵԼ(․ՁԴ- '}' ․ՆՏ ․ՆՏ)

	․ԵԼ('name = subcollection.collection_type + "_" + subcollection.min + "_" + subcollection.max + "_" +  subcollection.collections[0].id;' ․ՆՏ ․ՆՏ)

	․ԵԼ('if (tableUuid[name]) {' ․ՆՏ ․ՁԴ+)
		․ԵԼ('collection.element_type = tableUuid[name];' ․ՆՏ)
	․ԵԼ(․ՁԴ- '} else {' ․ՆՏ ․ՁԴ+)
		․ԵԼ('subcollection.name = name;' ․ՆՏ)
		․ԵԼ('subcollection.id = name;' ․ՆՏ)
		․ԵԼ('if (tableChildren["' * '"]) {' ․ՆՏ ․ՁԴ+)
		․ԵԼ('typeUuid = "a480317b-b7fa-4b81-8f19-ccb9224f3604";' ․ՆՏ)
		․ԵԼ('if (tableChildren["' * '"]) {' ․ՆՏ ․ՁԴ+)
		․ԵԼ('for (const ind in tableChildren["' * '"]) {' ․ՆՏ ․ՁԴ+)
		․ԵԼ('allowedValues.push(tableChildren["' * '"][ind]);' ․ՆՏ)
		․ԵԼ('AddChildren(tableChildren["' * '"][ind], allowedValues);' ․ՆՏ)
		․ԵԼ(․ՁԴ- '}' ․ՆՏ)
		․ԵԼ(․ՁԴ- '}' ․ՆՏ)
		․ԵԼ(' allowedValues = [];' ․ՆՏ)
		․ԵԼ(․ՁԴ- '} else {' ․ՆՏ)
		․ԵԼ('typeUuid = tableUuid.' * ';}' ․ՆՏ)
		․ԵԼ('subcollection.collections[0].element_type = typeUuid;' ․ՆՏ ․ՆՏ)
		․ԵԼ('generateUuid =  JSON.parse(await metax.save(JSON.stringify(subcollection), "applcation/json"));' ․ՆՏ)
		․ԵԼ('collection.uuid  = generateUuid.uuid;' ․ՆՏ)
		․ԵԼ('tableUuid.name = generateUuid.uuid;' ․ՆՏ)
		․ԵԼ('await metax.save(JSON.stringify(subcollection), "applcation/json", subcollection.uuid);' ․ՆՏ)
		․ԵԼ('collection.element_type = generateUuid.uuid;' ․ՆՏ)
	․ԵԼ(․ՁԴ- '}' ․ՆՏ ․ՆՏ)

	․ԵԼ(․ՍՏԱՆԱԼ'Տիպի_անուն' '.collections.push(collection);' ․ՆՏ ․ՆՏ)
	;


# entity սահմանափակումներ
ՈԲԵԿՏ_ՍԱՀՄԱՆԱՓԱԿՈՒՄ = (WHERE | UNIQUE | DERIVE | INVERSE) ;

DERIVE = 'DERIVE' { DERIVE_ՅԱՏԿԱՆԻՇՆԵՐ } ;
DERIVE_ՅԱՏԿԱՆԻՇՆԵՐ = DERIVE_ՅԱՏԿԱՆԻՇ ':=' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ ';' ;
DERIVE_ՅԱՏԿԱՆԻՇ = (ՅԱՅՏԱՐԱՐՈՒԱԾ_ՅԱՏԿԱՆԻՇ | ՏԱՐԲԵՐԱՆՇԱՆ_ՏԻՊ)
		':' (ԶԱՆԳՈՒԱԾ_ՏԻՊ_ՅՂՈՒՄ | ՏԻՊ_ՅՂՈՒՄ) ;

INVERSE = 'INVERSE' { INVERSE_ՅԱՏԿԱՆԻՇՆԵՐ } ;
INVERSE_ՅԱՏԿԱՆԻՇՆԵՐ = ՏԱՐԲԵՐԱՆՇԱՆ_ՏԻՊ ':' ('SET' ԶԱՆԳՈՒԱԾ_ՉԱՓ_ՅՂՈՒՄ 'OF' | ․ԴԱՏԱՐԿ)
			ՏԱՐԲԵՐԱՆՇԱՆ 'FOR' ՏԱՐԲԵՐԱՆՇԱՆ ';' ;

UNIQUE = 'UNIQUE' UNIQUE_ԿԱՆԱՒՆ { UNIQUE_ԿԱՆԱՒՆ } ;
UNIQUE_ԿԱՆԱՒՆ = ՏԱՐԲԵՐԱՆՇԱՆ_ՏԻՊ ':' ՏԱՐԲԵՐԱՆՇԱՆ { ',' ՏԱՐԲԵՐԱՆՇԱՆ } ';' ;

ՅԱՅՏԱՐԱՐՈՒԱԾ_ՅԱՏԿԱՆԻՇ = 'SELF' ԵՏՇԵՂԳԻԾ ՏԱՐԲԵՐԱՆՇԱՆ '.' ՏԱՐԲԵՐԱՆՇԱՆ ;


ԵԼ_ՈԲԵԿՏ_ՆԱԽԱԲԱՆ =
	․ԵԼ('var ' * ' = {' ․ՆՏ ․ՁԴ+)
		․ԵԼ('"name": {"en_US":"' * '"},' ․ՆՏ)
		․ԵԼ('"id": "' * '",' ․ՆՏ)
		․ԵԼ('"type": "585f3fef-7246-4612-8f24-b98d1a9ae8b7",' ․ՆՏ)
		․ԵԼ('"is_typedef": "df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
		․ԵԼ('"description": "",' ․ՆՏ)
		․ԵԼ('"properties": [],' ․ՆՏ)
		․ԵԼ('"collections": [],' ․ՆՏ)
		․ԵԼ('"methods": []' ․ՆՏ)

		ԵԼ_ՏԻՊ_ՇԱՐՈՒՆԱԿՈՒԹԻՒՆ

	․ԵԼ(․ՁԴ- 'index = 0;' ․ՆՏ ․ՆՏ)
	;

# ․ՍՏԱՆԱԼ'Յատկանիշի_անուն'
ԵԼ_ՈԲԵԿՏ_ՅԱՏԿԱՆԻՇ =
	․ԵԼ('tname = "' * '";' ․ՆՏ)
	․ԵԼ('property = {' ․ՆՏ ․ՁԴ+)
		․ԵԼ('"id": tname,' ․ՆՏ)
		․ԵԼ('"name": {"en_US":tname},' ․ՆՏ)
		․ԵԼ('"mandatory": "' ․ՍՏԱՆԱԼ'Ընտրովի' '",' ․ՆՏ)
		․ԵԼ('"type": "0d71b3a2-c167-449c-877b-5a3eb0e42089",' ․ՆՏ)
		․ԵԼ('"default_value": "",' ․ՆՏ)
		․ԵԼ('"readonly": "df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
		․ԵԼ('"visible": "b4598a37-3126-42c1-a7b2-2906b12989f8",' ․ՆՏ)
		․ԵԼ('"visible_in_list_view": "df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
		․ԵԼ('"enable_internalization": "df868f39-896b-431b-b699-e71b4233eaf8",' ․ՆՏ)
		․ԵԼ('"enable_version_tracking": "df868f39-896b-431b-b699-e71b4233eaf8"' ․ՆՏ)
	․ԵԼ(․ՁԴ- '}' ․ՆՏ ․ՆՏ)
	;

ԵԼ_ՈԲԵԿՏ_ՅԱՏԿԱՆԻՇ_ՎԵՐՋԱԲԱՆ =
		․ԵԼ('typeUuid = tableUuid.' * ';' ․ՆՏ)
		․ԵԼ('if (typeUuid) {' ․ՆՏ ․ՁԴ+)
			․ԵԼ('property.value_type = typeUuid;' ․ՆՏ)
			․ԵԼ(․ՍՏԱՆԱԼ'Տիպի_անուն' '.properties.push(property);' ․ՆՏ)
		․ԵԼ(․ՁԴ- '} else {' ․ՆՏ ․ՁԴ+)
			․ԵԼ('IncompleteTypes.push( new Structure("pr_entity", "' ․ՍՏԱՆԱԼ'Տիպի_անուն' '", property, "' * '") );' ․ՆՏ)
		․ԵԼ(․ՁԴ- '}' ․ՆՏ ․ՆՏ)
		;

# Առոյթ

ԱՌՈՅԹ = 'FUNCTION' ՏԱՐԲԵՐԱՆՇԱՆ
        '(' ՅԱՐԱՉԱՓ ')' ':' ՎԵՐԱԴԱՐՁՄԱՆ_ՏԻՊ ';'
	(ՏԵՂԱԿԱՆ_ՓՈՓՈԽԱԿԱՆ | ․ԴԱՏԱՐԿ)
	{ ԳՈՐԾՈՂՈՒԹԻՒՆ }
        'END_FUNCTION' ';' ;


# Arguments
ՅԱՐԱՉԱՓ = ՅԱՐԱՉԱՓ_ԱՆՈՒՆ ':' ՏԻՊ_ՅՂՈՒՄ2 (';' ՅԱՐԱՉԱՓ | ․ԴԱՏԱՐԿ) ;
ՅԱՐԱՉԱՓ_ԱՆՈՒՆ = ՏԱՐԲԵՐԱՆՇԱՆ (',' ՅԱՐԱՉԱՓ_ԱՆՈՒՆ | ․ԴԱՏԱՐԿ)  ;
ՎԵՐԱԴԱՐՁՄԱՆ_ՏԻՊ = ՏԻՊ_ՅՂՈՒՄ2 ;

ՏԵՂԱԿԱՆ_ՓՈՓՈԽԱԿԱՆ = 'LOCAL'
	{ ՅԱՅՏԱՐԱՐՈՒՄ }
        'END_LOCAL' ';' ;

ՅԱՅՏԱՐԱՐՈՒՄ = ՏԱՐԲԵՐԱՆՇԱՆ_ԱՌՈՅԹ { ',' ՏԱՐԲԵՐԱՆՇԱՆ_ԱՌՈՅԹ } ':' ՏԻՊ_ՅՂՈՒՄ2 (ՎԵՐԱԳՐՄԱՆ_ԱՐԺԷՔ | ․ԴԱՏԱՐԿ) ';' ;

ԳՈՐԾՈՂՈՒԹԻՒՆ = (ՎԵՐԱԴԱՐՁ | ԵԹԵ_ՊԱՅՄԱՆ | ԿՐԿՆՈՒԹԻՒՆ | ԴԷՊՔ_ՊԱՅՄԱՆ | ԽՄԲԱՒՈՐՈՒՄ | ԲԱՑ_ԹՈՂՆԵԼ | ՎԵՐԱԳՐՈՒՄ) ';' | ';' | ՄԵԿՆԱԲԱՆՈՒԹԻՒՆ ; 

ԵԹԵ_ՊԱՅՄԱՆ = 'IF' ՊԱՅՄԱՆ 'THEN'
	ԳՈՐԾՈՂՈՒԹԻՒՆ { ԳՈՐԾՈՂՈՒԹԻՒՆ }
        ('ELSE' ԳՈՐԾՈՂՈՒԹԻՒՆ { ԳՈՐԾՈՂՈՒԹԻՒՆ } | ․ԴԱՏԱՐԿ)
        'END_IF' ;

# ՀԱՄԵՄԱՏՈՒԹԻՒՆ ՞
ՊԱՅՄԱՆ = ՀԱՄԵՄԱՏՈՒԹԻՒՆ ;

ԿՐԿՆՈՒԹԻՒՆ = 'REPEAT' ՎԵՐԱԳՐՈՒՄ 'TO' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ ';'
	ԳՈՐԾՈՂՈՒԹԻՒՆ { ԳՈՐԾՈՂՈՒԹԻՒՆ }
        'END_REPEAT' ;

ԴԷՊՔ_ՊԱՅՄԱՆ = 'CASE' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ 'OF' { ԴԷՊՔ_ՊԱՅՄԱՆ_ԳՈՐԾՈՂՈՒԹԻՒՆ } ( 'OTHERWISE' ':' ԳՈՐԾՈՂՈՒԹԻՒՆ | ․ԴԱՏԱՐԿ) 'END_CASE' ;
ԴԷՊՔ_ՊԱՅՄԱՆ_ԳՈՐԾՈՂՈՒԹԻՒՆ = ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ { ',' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ } ':' ԳՈՐԾՈՂՈՒԹԻՒՆ ;

ԽՄԲԱՒՈՐՈՒՄ = 'BEGIN' ԳՈՐԾՈՂՈՒԹԻՒՆ { ԳՈՐԾՈՂՈՒԹԻՒՆ } 'END' ;

ԲԱՑ_ԹՈՂՆԵԼ = 'ESCAPE' ;

ՎԵՐԱԴԱՐՁ = 'RETURN' '(' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ ')' ;

ՎԵՐԱԳՐՈՒՄ = ՏԱՐԲԵՐԱՆՇԱՆ_ԱՌՈՅԹ (ՑՈՒՑԻՉ | ․ԴԱՏԱՐԿ) ՎԵՐԱԳՐՄԱՆ_ԱՐԺԷՔ ;


# Կանաւն (rule)

ԿԱՆԱՒՆ = 'RULE' ՏԱՐԲԵՐԱՆՇԱՆ
        'FOR' '(' ՏԱՐԲԵՐԱՆՇԱՆ ')' ';'
	(ՏԵՂԱԿԱՆ_ՓՈՓՈԽԱԿԱՆ | ․ԴԱՏԱՐԿ)
	{ ԳՈՐԾՈՂՈՒԹԻՒՆ }
	(ԿԱՆԱՒՆ_ՍԱՀՄԱՆԱՓԱԿՈՒՄ | ․ԴԱՏԱՐԿ)
	'END_RULE' ';'
	;

ԿԱՆԱՒՆ_ՍԱՀՄԱՆԱՓԱԿՈՒՄ = WHERE ;



# generic
ՎԵՐԱԳՐՄԱՆ_ԱՐԺԷՔ = ':=' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ ;

ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ = ԱՐԺԷՔ (ԳՈՐԾԱՆՇԱՆ ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ | ․ԴԱՏԱՐԿ) ;

ԱՐԺԷՔ = (ՌԱՑԻՈՆԱԼ_ԹԻՒ | ՆԱԽԱՊԷՍ_ՍԱՀՄԱՆՈՒԱԾ_ԱՐԺԷՔ | ՆԱԽԱՊԷՍ_ՍԱՀՄԱՆՈՒԱԾ_ԱՌՈՅԹ | ՄԻԱՏԱՐՐ_ԳՈՐԾԱՆՇԱՆ ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ |
		   QUERY | ՍԱՀՄԱՆՈՒԱԾ_ԱՐԺԷՔ | ՏՈՂ | ԶԱՆԳՈՒԱԾ | ՀԱՄԵՄԱՏՈՒՄ | '(' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ ')' ) ;

# change this to ՏԱՐԲԵՐԱՆՇԱՆ_ԱՌՈՅԹ
ՍԱՀՄԱՆՈՒԱԾ_ԱՐԺԷՔ = ('SELF' | ՏԱՐԲԵՐԱՆՇԱՆ_ԱՌՈՅԹ) 
			( '(' (ԱՐԳՈՒՄԵՆՏՆԵՐ | ․ԴԱՏԱՐԿ) ')'
			   (ՑՈՒՑԻՉ | ․ԴԱՏԱՐԿ) |
			  ՑՈՒՑԻՉ | ․ԴԱՏԱՐԿ ) ;
ԱՐԳՈՒՄԵՆՏՆԵՐ = ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ {',' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ} ;

ՑՈՒՑԻՉ = ԶԱՆԳՈՒԱԾԻ_ՑՈՒՑԻՉ { ԶԱՆԳՈՒԱԾԻ_ՑՈՒՑԻՉ }
	  (ՅԱՏԿԱՆԻՇ_ԿԱՄ_ՈԲԵԿՏ_ՅՂՈՒՄ | ․ԴԱՏԱՐԿ) |
	 ՅԱՏԿԱՆԻՇ_ԿԱՄ_ՈԲԵԿՏ_ՅՂՈՒՄ ;
ԶԱՆԳՈՒԱԾԻ_ՑՈՒՑԻՉ = '[' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ ']' ;
ՅԱՏԿԱՆԻՇ_ԿԱՄ_ՈԲԵԿՏ_ՅՂՈՒՄ = '.' ՍԱՀՄԱՆՈՒԱԾ_ԱՐԺԷՔ	| ԵՏՇԵՂԳԻԾ ՍԱՀՄԱՆՈՒԱԾ_ԱՐԺԷՔ ;

ՆԱԽԱՊԷՍ_ՍԱՀՄԱՆՈՒԱԾ_ԱՐԺԷՔ = ՏՐԱՄԱԲԱՆԱԿԱՆ_ԱՐԺԷՔ | ՄԱԹԵՄԱՏԻԿԱԿԱՆ_ԱՐԺԷՔ | '?' ;

ՏՐԱՄԱԲԱՆԱԿԱՆ_ԱՐԺԷՔ = 'FALSE' | 'TRUE' | 'UNKNOWN' ;
ՄԱԹԵՄԱՏԻԿԱԿԱՆ_ԱՐԺԷՔ = 'PI' ;

ՆԱԽԱՊԷՍ_ՍԱՀՄԱՆՈՒԱԾ_ԱՌՈՅԹ = ՄԱԹԵՄԱՏԻԿԱԿԱՆ_ԱՌՈՅԹ						|
                                'SIZEOF'    '(' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ ')'			|
                                'BLENGTH'   '(' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ ')'			|
                                'EXISTS'    '(' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ ')'			|
                                'TYPEOF'    '(' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ ')'			|
                                'HIINDEX'   '(' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ ')'			|
                                'ԼՕINDEX'   '(' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ ')'			|
				'NVL'       '(' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ ',' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ ')'	|
				'USEDIN'    '(' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ ',' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ ')' 
                                ;

ՄԱԹԵՄԱՏԻԿԱԿԱՆ_ԱՌՈՅԹ =   'SQRT'  '(' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ ')'          |
                        'ABS'   '(' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ ')'          |
                        'SIN'   '(' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ ')' 
                        ;

QUERY = 'QUERY' '(' ՏԱՐԲԵՐԱՆՇԱՆ '<*' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ '|' ՀԱՄԵՄԱՏՈՒԹԻՒՆ ')' ;

ԶԱՆԳՈՒԱԾ = '[' (ԶԱՆԳՈՒԱԾԻ_ՏԱՐՐ {',' ԶԱՆԳՈՒԱԾԻ_ՏԱՐՐ} | ․ԴԱՏԱՐԿ) ']' ;
ԶԱՆԳՈՒԱԾԻ_ՏԱՐՐ = ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ (':' ԱՐՏԱՅԱՅՏՈՒԹԻՒՆ | ․ԴԱՏԱՐԿ) ;

ՀԱՄԵՄԱՏՈՒՄ = '{' ԱՐԺԷՔ ՀԱՄԵՄԱՏՈՒՄ_ԳՈՐԾԱՆՇԱՆ ԱՐԺԷՔ ՀԱՄԵՄԱՏՈՒՄ_ԳՈՐԾԱՆՇԱՆ ԱՐԺԷՔ '}' ;
ՀԱՄԵՄԱՏՈՒՄ_ԳՈՐԾԱՆՇԱՆ = '<=' | '<' ;

# operator
ԳՈՐԾԱՆՇԱՆ = ՀԱՄԵՄԱՏՈՒԹԵԱՆ_ԳՈՐԾԱՆՇԱՆ | ՏՐԱՄԱԲԱՆԱԿԱՆ_ԳՈՐԾԱՆՇԱՆ | ԹՈՒԱԲԱՆԱԿԱՆ_ԳՈՐԾԱՆՇԱՆ ;

ՀԱՄԵՄԱՏՈՒԹԵԱՆ_ԳՈՐԾԱՆՇԱՆ = '=' | '<=' | '<>' | '>=' | '<' | '>' | ':<>:' | ':=:' | 'IN' ;
ՏՐԱՄԱԲԱՆԱԿԱՆ_ԳՈՐԾԱՆՇԱՆ = 'AND' | 'OR' | '||' | 'XOR' ;
ԹՈՒԱԲԱՆԱԿԱՆ_ԳՈՐԾԱՆՇԱՆ = '+' | '-' | '*' | '/' | 'MOD' ;

# unary operator
ՄԻԱՏԱՐՐ_ԳՈՐԾԱՆՇԱՆ = 'NOT' | '--' ՏԱՐԲԵՐԱՆՇԱՆ | '+' | '-' ;


ՄԵԿՆԱԲԱՆՈՒԹԻՒՆ = '(*' ԳՐԱՀԻՒՍ֊ՄԵԿՆՈՒԹԵԱՆ ;


# սահման եզերաց
․ԵԶԵՐՔ

#backslash
ԵՏՇԵՂԳԻԾ = ․ՄԻՆ֊Ի(92) ;
ԲԱՑԱՏ = { ․ՄԻՆ֊Ի(32!9!13!10) } ;
ՏԱՐԲԵՐԱՆՇԱՆ = ԲԱՑԱՏ ․ՍԿԻԶԲ֊ԵԶԵՐ ԳՐԱՆՇԱՆ { ԳՐԱՆՇԱՆ | ԹՈՒԱՆՇԱՆ } ․ԱՒԱՐՏ֊ԵԶԵՐ ;
ԹԻՒ = ԲԱՑԱՏ ․ՍԿԻԶԲ֊ԵԶԵՐ ԹՈՒԱՆՇԱՆ { ԹՈՒԱՆՇԱՆ } ․ԱՒԱՐՏ֊ԵԶԵՐ ;
ՌԱՑԻՈՆԱԼ_ԹԻՒ = ԲԱՑԱՏ ․ՍԿԻԶԲ֊ԵԶԵՐ ԹՈՒԱՆՇԱՆ {ԹՈՒԱՆՇԱՆ} (․ՄԻՆ֊Ի('.) {ԹՈՒԱՆՇԱՆ} | ․ԴԱՏԱՐԿ) (․ՄԻՆ֊Ի('E) {ԹՈՒԱՆՇԱՆ} | ․ԴԱՏԱՐԿ) ․ԱՒԱՐՏ֊ԵԶԵՐ ;
ՏՈՂ = ԲԱՑԱՏ ․ՄԻՆ֊Ի(39) ․ՍԿԻԶԲ֊ԵԶԵՐ { ․ՄԻՆ֊ՈՉ֊Ի(13!10!39) } ․ԱՒԱՐՏ֊ԵԶԵՐ ․ՄԻՆ֊Ի(39) ;
ԳՐԱՆՇԱՆ = ․ՄԻՆ֊Ի('A:'Z!'a:'z!'_) ;
ԹՈՒԱՆՇԱՆ = ․ՄԻՆ֊Ի('0:'9) ;
ԳՐԱՀԻՒՍ֊ՄԵԿՆՈՒԹԵԱՆ = { ․ՄԻՆ֊ՈՉ֊Ի('*) } ․ՄԻՆ֊Ի('*) (․ՄԻՆ֊Ի(')) | ԳՐԱՀԻՒՍ֊ՄԵԿՆՈՒԹԵԱՆ) ;
# Տարբերանշաններ
ՏԱՐԲԵՐԱՆՇԱՆ_ՏԻՊ = ․ՀԻՄՆԱԲԱՌ('END_ENTITY' 'END_TYPE' 'WHERE' 'DERIVE' 'INVERSE' 'UNIQUE' 'END_RULE') ՏԱՐԲԵՐԱՆՇԱՆ ;
# if?, repeat?
ՏԱՐԲԵՐԱՆՇԱՆ_ԱՌՈՅԹ = ․ՀԻՄՆԱԲԱՌ('END_FUNCTION' 'END_RULE' 'END_LOCAL' 'IF' 'ELSE' 'END_IF' 'END' 'REPEAT' 'END_REPEAT' 'OTHERWISE' 'WHERE') ՏԱՐԲԵՐԱՆՇԱՆ ;

․ՎԵՐՋ
`
meta.compile(syntax);

fs.writeFile('./src/translation/translation_js.mjs', meta.outbuf, (err) => {
    // In case of a error throw err.
    if (err) throw err;
})
