// rename file

var fs = require('fs');

fs.rename('demo2.html', 'demo2a.html', function (err) {
    if(err) throw err;
    console.log('file renamed');
});