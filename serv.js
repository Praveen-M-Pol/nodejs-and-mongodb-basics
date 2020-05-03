var http = require('http');
var dt = require('./myFirstModule.js');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write("hello praveen pol"+"<br>"+dt.myDateTime());
    res.end('<h1>Good morning</h1>');
}).listen(8081);
console.log('server working');
