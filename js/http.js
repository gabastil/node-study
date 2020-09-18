// Set up a local server


// You can only use require within .js files not .mjs ones
var http = require("http");
var fs = require("fs");
const custom = require("./custom.js");

// You can only import from another .mjs file;
// import {circleArea, saySomething} from './export-test.mjs';

console.log(custom);
console.log(circleArea(3));
console.log(saySomething());

var host = "127.0.0.1", port = 8081;

http.createServer(function (reader, response){
	// Send the HTTP header
	// HTTP Status : 200 : OK
	// Content Type : text/plain
	response.writeHead(200, {'Content-Type' : 'text/plain'});

	// Send the response body as "Hello World"
    var second_line = "this is my name";
    var message = `Hello World\nMy name is ${second_line}`;
    var message = `${message} with ${custom.combineThem(3, 5)}`;
    response.end(message);
}).listen(8081);

console.log("Server set up on http://127.0.0.1:8081");
