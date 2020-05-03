var fs = require('fs');
var rs = fs.createReadStream('serv.js');

rs.on('open', function () {
    console.log('file is open');
});