// projection will allow to false id  
// projection does not include exclusive

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    var dbo = db.db('mydb');
    dbo.collection('customers').find({}, { projection: {_id:0, name:1, usn:1}}).toArray(function (err, result) {
        if(err) throw err;
        console.log(result);
        if(result[2].name === 'dinesh') console.log(result[2].name);
        db.close();
    });
});