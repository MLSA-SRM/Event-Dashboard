const Transporter = require("../config/mailConfig");
var QRCode = require("qrcode");
var img;

let test = "";

QRCode.toDataURL("Yoman", function (err, img) {
  let mailDetails = {
    from: "yoman@helo.in",
    to: test,
    subject: "Test mail",
    attachDataUrls: true,
    html: `<span><h1 style='color:black'>Welcome</h1><h4>XYZ</h4></span><br><pre><img src="${img}"></pre>`,
  };
  (async () => {
    let info = await Transporter.sendMail(mailDetails);
    console.log("Message sent: %s", info.messageId);
  })();
});
