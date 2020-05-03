// returns first occured element

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    var dbo = db.db('mydb');
    dbo.collection('customers').findOne({}, function (err, result) {
        if(err) throw err;
        console.log(result.name);
        db.close();
    });
});