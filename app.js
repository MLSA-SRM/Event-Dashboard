var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const nodemailer = require('nodemailer');
var QRCode = require('qrcode');
var img;

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

QRCode.toString('https://www.google.co.in/', function (err, url) {
  console.log(url);
  img = url;
});

let mailDetails = {
    from: 'youremail@gmail.com',
    to: 'reciever@gmail.com',
    subject: 'Test mail',
    html: "<span><h1 style='color:black'>Welcome</h1><h4>XYZ</h4></span><br><pre>"+ img +"</pre>"
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
