var http = require("http");
//var chessBoard = require("chessboardjs-0.3.0");

var server = http.createServer(function (request, response) {
	
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World\n');
});

var port_number = server.listen(process.env.PORT || 8484);

console.log('Server is running on ' + port_number.toString() + ' port');

