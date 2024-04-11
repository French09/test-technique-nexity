import fs from "node:fs";
import { parse } from "csv-parse";

const __dirname = new URL(".", import.meta.url).pathname;

const parser = parse(
	{ delimiter: ",", columns: true },
	function (err, data) {
		console.info(data);
		const jsonData = JSON.stringify(data, null, 2);
		fs.writeFile(__dirname + "/properties.json", jsonData, function (err) {
			if (err) {
				console.error("Error writing JSON file:", err);
				return;
			}
			console.log("JSON file 'properties.json' has been saved!");
		});
	}
);

fs.createReadStream(__dirname + "/properties.csv").pipe(parser);
