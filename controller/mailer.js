const Transporter = require("../config/mailConfig");
var QRCode = require('qrcode');
var img;

let test = "";

QRCode.toString('https://www.google.co.in/', function (err, url) {
  console.log(url);
  img = url;
});

let mailDetails = {
  from: "yoman@helo.in",
  to: test,
  subject: "Test mail",
  html: "<span><h1 style='color:black'>Welcome</h1><h4>XYZ</h4></span><br><pre>"+ img +"</pre>",
};

(async () => {
  let info = await Transporter.sendMail(mailDetails);
  console.log("Message sent: %s", info.messageId);
})();
