var http = require("http");
//var chessBoard = require("chessboardjs-0.3.0");

http.createServer(function (request, response) {
	
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World\n');
}).listen(8484);

console.log('Server running on 8484 port');

