"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fs_1 = require("node:fs");
var csv_parse_1 = require("csv-parse");
var __dirname = new URL(".", import.meta.url).pathname;
var columns = [
    "id",
    "name",
    "age",
    "city",
    "postalCode",
    "latitude",
    "longitude",
    "price",
    "nbRoomsMin",
    "nbRoomsMax",
    "picture",
];
var parser = (0, csv_parse_1.parse)({ delimiter: ",", columns: columns }, function (err, data) {
    console.info(data);
    // const jsonData = JSON.stringify(data, null, 2);
    // fs.writeFile(__dirname + "/properties.json", jsonData, function (err) {
    // 	if (err) {
    // 		console.error("Error writing JSON file:", err);
    // 		return;
    // 	}
    // 	console.log("JSON file 'properties.json' has been saved!");
    // });
});
node_fs_1.default.createReadStream(__dirname + "/properties.csv").pipe(parser);
