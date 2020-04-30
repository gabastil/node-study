// Set up a local server

var http = require("http");
var fs = require("fs");

http.createServer(function (reader, response){
	// Send the HTTP header
	// HTTP Status : 200 : OK
	// Content Type : text/plain
	response.writeHead(200, {'Content-Type' : 'text/plain'});

	// Send the response body as "Hello World"
	response.end('Hello World\n');


	console.log("Attempt next part");

	fs.readFile('py/index.py', function (err, data){
		if (err) return console.error(err);
		console.log(data.toString());
	});

	console.log("Program Ended");
}).listen(8081);

console.log("Server set up on http://127.0.0.1:8081");