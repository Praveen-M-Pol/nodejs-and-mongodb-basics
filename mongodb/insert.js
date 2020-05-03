// For inserting one record use function inerstOne()
// If you do not inert id's mongodb will assign id's automatically

var Mongoclient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

Mongoclient.connect(url, function (err, db) {
    if(err) throw err;
    var dbo = db.db('mydb');
    var myObj =[
         {_id: 1, name: 'praveen', usn: '01fe17bcs139'},
         {_id: 2, name: 'naveen', usn: '01ge17bcs140'},
         {_id: 3, name: 'dinesh', usn: '01fe17bcs141'}
    ];
    dbo.collection('customers').insertMany(myObj, function (err, res) {
        if(err) throw err;
        console.log('Number of record inserted are:'+res.insertedCount);
        console.log(res); // to display records  
        db.close();
    });
});