// Reads the excisting file

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('demo.html', function (err, data) {
        if(!err) {
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write
            res.end();
        } else {
            res.end('404 error');
        }
    })
}).listen(8081);
console.log('server running');