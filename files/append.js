// creates file and appends it

var fs = require('fs');

fs.appendFile('demo1.html', 'hello world', function (err) {
    if(err) throw err;
    console.log('saved');
});
