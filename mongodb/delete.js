var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    var dbo = db.db('mydb'); 
    var query = {name: 'dinesh'}; 
    dbo.collection('customers').deleteOne(query ,function (err, Obj) {
        if(err) throw err;
        console.log('1 document deleted');
        db.close();
    });
});