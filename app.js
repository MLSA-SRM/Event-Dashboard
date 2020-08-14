var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const nodemailer = require('nodemailer');

var indexRouter = require("./routes/index");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youremail@gmail.com',
        pass: '*********'
    }
});

let mailDetails = {
    from: 'youremail@gmail.com',
    to: 'reciever@gmail.com',
    subject: 'Test mail',
    text: 'Nodemailer testing mail, congratulations if you recieved this.'
};

mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Email failed');
    } else {
        console.log('Email sent successfully');
    }
});

app.use("/", indexRouter);

module.exports = app;
