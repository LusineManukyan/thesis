//  import compilers
import { compiler as translation } from "./translation_js.mjs"
import fs from 'fs';
const compiler = translation;


function compiler_error(compiler) {
	// error
	if (compiler.eflag) {
		console.log("\nERROR:\n", "rule: " + compiler.erule, ", token: " + compiler.token , ", input: " + compiler.inp);

		console.log("input: \n");
		let inp = compiler.inp - 1;
		let i = inp - 20 ;  if (i < 0) i = 0 ;
		let j = inp + 20 ;  if (j > compiler.inbuf.length) j = compiler.inbuf.length ;
		console.log( compiler.inbuf.substring(i, inp) + '<scan>' + compiler.inbuf.substring(inp, j) );

		console.log("\nstack: \n", compiler.stack, "frame: ", compiler.stackframe);
	}
}

function main() {
	const args = process.argv.slice(2);
	if (args.length < 1) {
		console.error('Usage: node main.mjs <file_path>');
		process.exit(1);
	}
	const filePath = args[0];
	fs.readFile(filePath, 'utf8', (err, data) => {
		if (err) {
			console.error('Error reading file:', err);
			return;
		}
		const content = data;
		compiler.compile(content);   // input: express file
		fs.writeFile('./src/schema_creater/main.mjs', compiler.outbuf, (err) => {
			// In case of a error throw err.
			if (err) throw err;
		})
		compiler_error(compiler);
	});
}

main();
