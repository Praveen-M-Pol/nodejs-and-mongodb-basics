var http = require('http');
var url = require('./class/add.js');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    /*var q = url.parse(req.url, true).query;
    var txt = q.year+" "+q.month+" "+q.day;
    res.end(txt);*/
    res.write(req.url);
    res.end();
}).listen(8082);
console.log('server working');

