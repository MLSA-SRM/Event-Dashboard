const Transporter = require("../config/mailConfig");
var QRCode = require("qrcode");
const users = require("./data.json");
var img;

let test = "";

QRCode.toDataURL("Yoman", function (err, img) {
  for(var k in users)
{
  console.log(users[k].name);
  let mailDetails = {
    from: "yoman@helo.in",
    to: users[k].email,
    subject: "Test mail",
    attachDataUrls: true,
    html: `<span style='font-size: 2em;'>Hello</span><span style='color: #ec0101'>${users[k].name}</span><p>Thank You for choosing to attend our event on something. I would be an absolute honour to have you with us. Looking forward to seeing you there. Below you can find detils of your involvement in the event.</p><br><pre><img src="${img}"></pre>`,
  };
  (async () => {
    let info = await Transporter.sendMail(mailDetails);
    console.log("Message sent: %s", info.messageId);
  })();
}
});
