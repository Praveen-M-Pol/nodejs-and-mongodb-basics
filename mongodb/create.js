function insertVal() {
    var Mongoclient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

Mongoclient.connect(url, function (err, db) {
    if(err) throw err;
    var dbo = db.db('mydb');
    var data = document.form1;
    var fnameV = data.firstName.value;
    var lnameV = data.lastName.value;
    var myObj =[
         {_id: 1, fname: fnameV, lname: lnameV}
    ];
    dbo.collection('customers').insertMany(myObj, function (err, res) {
        if(err) throw err;
        console.log('Record inserted');
        //console.log(res); // to display records  
        db.close();
    });
});
}