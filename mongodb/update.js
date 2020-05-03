var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if(err) throw err;
    var dbo = db.db('mydb'); 
    var oldValues = {name: 'p'};
    var oldValues1 = {name: /^n/};
    var newvalues = {$set: {name: 'praveen'} };
    var newvalues1 = {$set: {name: 'n'} };    
    dbo.collection('customers').updateOne(oldValues, newvalues, function (err, res) {
        if(err) throw err;
        console.log('1 document updated');
        db.close();
    });
    dbo.collection('customers').updateMany(oldValues1, newvalues1, function (err, res) {
        if(err) throw err;
        console.log(res.result.nModified+' documents updated');
        db.close();
    });
});