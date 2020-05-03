// create, replace, append file

var fs = require('fs');

fs.writeFile('demo3.html', 'Hello praveen pol', function (err) {
    if(err) throw err;
    console.log('Saved!');
});