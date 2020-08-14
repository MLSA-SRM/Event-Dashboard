const Transporter = require("../config/mailConfig");

let test = "";

let mailDetails = {
  from: "yoman@helo.in",
  to: test,
  subject: "Test mail",
  text: "Nodemailer testing mail, congratulations if you recieved this.",
};

(async () => {
  let info = await Transporter.sendMail(mailDetails);
  console.log("Message sent: %s", info.messageId);
})();
