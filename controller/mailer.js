const Transporter = require("../config/mailConfig");
var QRCode = require("qrcode");
var ejs = require("ejs");
const mailer = (
  data,
  primary,
  secondary,
  // data,
  // name,
  subject,
  body,
  tertiary,
  title,
  hey,
  company,
  qr
) => {
  // console.log(
  //   data,
  //   primary,
  //   secondary,
  //   subject,
  //   body,
  //   tertiary,
  //   title,
  //   hey,
  //   company
  // );
  for (let a in data) {
    console.log(data[a]);
    // let test = "";
    QRCode.toDataURL(data[a].regno, function (err, img) {
      // console.log(img);
      ejs.renderFile(
        __dirname + "/email.ejs",
        {
          name: data[a].name,
          body,
          primary,
          secondary,
          tertiary,
          title,
          hey,
          company,
          img,
          qr,
        },
        (err, file) => {
          if (err) {
            console.log(err);
          } else {
            // console.log(data);
            // let test = "yo@gmail.com";
            // console.log(data[a].email);
            let mailDetails = {
              from: "yoman@helo.in",
              to: data[a].email,
              subject: subject,
              attachDataUrls: true,
              html: file,
            };
            (async () => {
              let info = await Transporter.sendMail(mailDetails);
              console.log("Message sent: %s", info.messageId);
            })();
          }
        }
      );
    });

    // console.log(data[a].name);
    // let mailDetails = {
    //   from: "yoman@helo.in",
    //   to: data[a].email,
    //   subject: "Event Registration",
    //   attachDataUrls: true,
    //   html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    //   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    //   <html xmlns="http://www.w3.org/1999/xhtml">
    //   <head>
    //   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    //   <title>Microsoft Email</title>
    //   <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    //   <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Heebo:wght@700&display=swap" rel="stylesheet">
    //   <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600&display=swap" rel="stylesheet">
    //   <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet">
    //   <style media="screen">
    //   @-webkit-keyframes AnimationName {
    //   0%{background-position:0% 50%}
    //   50%{background-position:100% 50%}
    //   100%{background-position:0% 50%}
    //   }
    //   @-moz-keyframes AnimationName {
    //   0%{background-position:0% 50%}
    //   50%{background-position:100% 50%}
    //   100%{background-position:0% 50%}
    //   }
    //   @keyframes AnimationName {
    //   0%{background-position:0% 50%}
    //   50%{background-position:100% 50%}
    //   100%{background-position:0% 50%}
    //   }
    //   body{
    //   margin-top: 5vh;
    //   background: linear-gradient(270deg, #e3e4f3, #d0d0fa);
    //   background-size: 400% 400%;
    //   -webkit-animation: AnimationName 27s ease infinite;
    //   -moz-animation: AnimationName 27s ease infinite;
    //   animation: AnimationName 27s ease infinite;
    //   }
    //   .header{
    //   background: #ecf4f3;
    //   -webkit-box-shadow: 0px 7px 24px 0px rgba(0,0,0,0.46);
    //   -moz-box-shadow: 0px 7px 24px 0px rgba(0,0,0,0.46);
    //   box-shadow: 0px 7px 24px 0px rgba(0,0,0,0.46);
    //   border: solid 1px #fff;
    //   border-radius: 5vh;
    //   max-width: 90vw;
    //   padding: 3vh;
    //   margin: 0 auto;
    //   }
    //   .header h1{
    //   color: #4e89ae;
    //   font-size: 6vh;
    //   font-family: 'Heebo', sans-serif;
    //   letter-spacing: -0.4vh;
    //   text-align: center;
    //   padding: -5vh;
    //   }
    //   .header h3{
    //   color: #28df99;
    //   font-family: 'Cookie', 'Verdana', san-serif;
    //   font-size: 5vh;
    //   text-align: center;
    //   }
    //   .header p{
    //   font-family: 'Nunito Sans', sans-serif;
    //   font-size: 2vh
    //   }
    //   hr{
    //   opacity: 30%;
    //   }
    //   #name{
    //   color: #3e978b;
    //   }
    //   .extra{
    //   color: #3e978b;
    //   }
    //   #event{
    //   color: #3e978b;
    //   }
    //   #Welcome{
    //   word-spacing: 1vw;
    //   }
    //   </style>
    //   </head>
    //   <body>

    //   <div class="header">
    //   <h1>microsoft</h1>
    //   <h3 id="Welcome">Welcome To <span id="event">${data[a].event}</span> </h3>
    //   <hr>
    //   <br>
    //   <p>Hey <span id="name">${data[a].name}</span>,</p>
    //   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br>
    //   Start Date: <span class="extra">Date</span> <br>
    //   Start Time: <span class="extra">Time</span> <br>
    //   Venue: <span class="extra">Location</span> <br><br>
    //   We hope to see you there.
    //   </p>

    //   <div class="qr-img">
    //   <span class="qr">
    //   <pre><img src="${img}"></pre>
    //   </span>
    //   </div>

    //   </div>

    //   </body>
    //   </html>`,
    // };
    // (async () => {
    //   let info = await Transporter.sendMail(mailDetails);
    //   console.log("Message sent: %s", info.messageId);
    // })();
  }
};
module.exports = mailer;
