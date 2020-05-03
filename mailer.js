var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'praveentech63@gmail.com',
        pass: 'praveen302'
    }
});

var mailOptions = {
        from : 'praveentech63@gmail.com',
        to : 'praveenpol99@gmail.com',
        subject : 'Nodejs email',
        text : 'Email sent from nodejs server <br> That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Emial sent: ' + info.response);
    }
});