var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    var dbo = db.db('mydb'); 
    var mysort = {name: 1}; //Asscending
    var mysort1 = {name: -1}; //Desscending
    dbo.collection('customers').find().sort(mysort).toArray(function (err, result) {
        if(err) throw err;
        console.log(result);
        db.close();
    });
});