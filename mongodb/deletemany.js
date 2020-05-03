var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    var dbo = db.db('mydb'); 
    var query = {name: /^n/}; 
    dbo.collection('customers').deleteMany(query ,function (err, Obj) {
        if(err) throw err;
        console.log(Obj.result.n, 'document deleted');
        db.close();
    });
});