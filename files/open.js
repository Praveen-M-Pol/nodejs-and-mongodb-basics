// creates empty file

var fs = require('fs');

fs.open('demo2.html', 'w', function (err,file) {
    if(err) throw err;
    console.log('Saved!');
});