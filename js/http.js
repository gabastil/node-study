// Set up a local server

var http = require("http");
var fs = require("fs");

var host = "127.0.0.1", port = 8081;

http.createServer(function (reader, response){
	// Send the HTTP header
	// HTTP Status : 200 : OK
	// Content Type : text/plain
	response.writeHead(200, {'Content-Type' : 'text/plain'});

	// Send the response body as "Hello World"
<<<<<<< HEAD
	response.end('Hello World\n');


	console.log(`${'-'.repeat(10)}\nOpen a file`);

	fs.readFile('py/index.py', function (err, data){
		if (err) return console.error(err);
		console.log(data.toString());
	});

	console.log("Program Ended again?");
}).listen(port, () =>{
		console.log(`Server set up on http://${host}:${port}`);
});
=======
    var second_line = "this is my name";
    var message = `Hello World\nMy name is ${second_line}`;
    response.end(message);
}).listen(8081);

console.log("Server set up on http://127.0.0.1:8081");
>>>>>>> 65347273aa7d115bfb9013981989729240fc2cb9
