const Transporter = require("../config/mailConfig");
var QRCode = require("qrcode");

const json = [
  {
    name: "John",
    reg: "RA001",
    email: "panakalaryan@gmail.com",
  },
  {
    name: "Doe",
    reg: "RA002",
    email: "panakalaryan@gmail.com",
  },
];

for (let a in json) {
  // console.log(json[a]);

  var img;

  let test = "";

  QRCode.toDataURL(json[a].reg, function (err, img) {
    // console.log(json[a].name);
    let mailDetails = {
      from: "yoman@helo.in",
      to: json[a].email,
      subject: "Test mail",
      attachDataUrls: true,
      html: `<span style='font-size: 2em;'>Hello</span><span style='color: #ec0101'>${json[a].name}</span><p>Thank You for choosing to attend our event on something. I would be an absolute honour to have you with us. Looking forward to seeing you there. Below you can find detils of your involvement in the event.</p><br><pre><img src="${img}"></pre>`,
    };
    (async () => {
      let info = await Transporter.sendMail(mailDetails);
      console.log("Message sent: %s", info.messageId);
    })();
  });
}
