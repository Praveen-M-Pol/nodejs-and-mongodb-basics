var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    var dbo = db.db('mydb'); 
    var query = {name: 'naveen'};
    var query1 = {name: /^p/}; //Regular expression lists all the names starts with p
    dbo.collection('customers').find(query).toArray(function (err, result) {
        if(err) throw err;
        console.log(result);
        db.close();
    });
    dbo.collection('customers').find(query1).toArray(function (err, result) {
        if(err) throw err;
        console.log(result);
        db.close();
    });
});