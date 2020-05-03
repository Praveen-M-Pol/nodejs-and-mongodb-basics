// delete file

var fs = require('fs');

fs.unlink('demo3.html', function (err) {
    if(err) throw err;
    console.log('file deleted');
});