var express = require("express");
var app = express();
var router = express.Router();
var bcrypt = require("bcrypt");
var ejs = require("ejs");
var {
  events,
  savePeople,
  homeData,
  saveEvent,
  userData,
} = require("../controller/db");
var mailer = require("../controller/mailer");
var User = require("../models/user");
var jwt = require("jsonwebtoken");
var auth = require("../Middleware/auth");
// const { use } = require("../config/mailConfig");
const Transporter = require("../config/mailConfig");

// const { eventNames } = require("../config/mailConfig");

router.post("/login", async function (req, res, next) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ msg: "Please enter all the fields" });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      console.log("User does not exist");
      return res.json({ msg: "User does not exist", status: false });
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) {
        return res.json({ msg: "Wrong Credentials", status: false });
      }
      jwt.sign(
        { id: user._id },
        "jwtToken",
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          return res.status(200).json({
            token,
            user: { username: user.username, id: user.id },
            status: true,
          });
        }
      );
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.post("/register", async function (req, res) {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) {
      res.json(false);
    }
    if (!doc) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      let newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      newUser.save();

      const token = jwt.sign({ id: newUser._id }, "jwtToken", {
        expiresIn: 3600,
      });
      res.status(200).json({
        token,
        user: {
          username: newUser.username,
          id: newUser._id,
        },
      });
    }
  });
});

router.post("/validToken", async function (req, res) {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, "jwtToken");
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/authUser", auth, async function (req, res) {
  const user = await User.findById(req.user.id);
  res.json({
    username: user.username,
    id: user._id,
  });
});

router.post("/user", async (req, res, next) => {
  // console.log(req.isAuthenticated());
  console.log(req.body);
  let id = req.body.data.id;
  // let id = "5f316249bf8263611807b23d";
  let data = await userData(id);
  let event = [];
  data.events.forEach((item) => {
    event.push({
      name: item.name,
      startDate: item.startDate,
      endDate: item.endDate,
    });
  });
  // console.log(event);
  res.json({
    name: data.username,
    events: event,
  });
});

router.post("/bardata", async (req, res, next) => {
  // console.log(Date.now());
  // app.set("id", req.session.passport.user);
  // console.log(req.user);
  // app.set("id", req.user.id);
  let username = req.body.name;
  console.log(username);
  // let username = "yoman";
  let data = await events(username);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let bardata = [];
  for (let i = 0; i < 7; i++) {
    let counter = 0;
    data.public.forEach((item) => {
      if (item.date.getDay() == i) {
        counter = counter + 1;
      }
    });
    if (counter != 0) {
      bardata.push({
        name: days[i],
        no: counter,
      });
    }
  }
  res.json(bardata);
});

router.post("/piechart", async (req, res, next) => {
  // let username = "yoman";
  let username = req.body.name;

  let data = await events(username);
  // console.log(data);
  let total = 0;
  let branch = [];
  let result = [];
  data.public.forEach((item) => {
    // console.log(item.name.branch);
    branch.push(item.name.branch);
    total += 1;
  });
  // console.log(branch);
  branch.forEach((lol) => {
    let counter = 0;
    let flag = 0;
    branch.forEach((item) => {
      if (lol == item) {
        counter += 1;
        flag = 1;
      }
    });

    if (flag == 1) {
      branch = branch.filter((item) => item !== lol);
      result.push({
        branch: lol,
        no: counter,
      });
    }
  });
  // console.log(result);
  res.json({
    total: data.attendence,
    attendence: total,
    data: result,
  });
});

router.post("/home/bargraph", async (req, res, next) => {
  let body = [];
  // let id = "5f316249bf8263611807b23d";
  let { id } = req.body;
  let data = await homeData(id);
  // res.json(data);
  data.forEach((item) => {
    body.push({
      title: item.name,
      date: item.startDate,
      // no: item.public.length,
    });
  });
  res.json(body);
});
router.post("/newevent", async (req, res, next) => {
  // let id = req.session.passport.user;
  // let id = "5f316249bf8263611807b23d";
  let { name, num, startDate, endDate } = req.body;
  console.log(req.body);
  // let status = true;
  let status = await saveEvent(id, name, num, startDate, endDate);
  res.json(status);
});

router.get("/table", (req, res, next) => {
  //TODO DATA hardcoded
  const json = [
    {
      name: "John",
      reg: "RA001",
      email: "xyz@gmail.com",
      IQ: "320",
      lang: "cpp",
      event: "ABC",
    },
    {
      name: "Doe",
      reg: "RA002",
      email: "xyz@gmail.com",
      IQ: "320",
      lang: "cpp",
      event: "XYZ",
    },
    {
      name: "Doe",
      reg: "RA002",
      email: "xyz@gmail.com",
      IQ: "320",
      lang: "cpp",
      event: "JKL",
    },
    {
      name: "Doe",
      reg: "RA002",
      email: "xyz@gmail.com",
      IQ: "320",
      lang: "cpp",
      event: "ABC",
    },
    {
      name: "Doe",
      reg: "RA002",
      email: "xyz@gmail.com",
      IQ: "320",
      lang: "cpp",
      event: "JKL",
    },
    {
      name: "Doe",
      reg: "RA002",
      email: "xyz@gmail.com",
      IQ: "320",
      lang: "cpp",
      event: "XYZ",
    },
  ];
  let keys = Object.keys(json[0]);
  let temp;
  let col = [];
  keys.forEach((item) => {
    temp = {};
    if (item === "name") {
      temp = {
        field: item,
        sortable: true,
        checkboxSelection: true,
        headerCheckboxSelection: true,
      };
    } else {
      temp = {
        field: item,
        sortable: true,
      };
    }
    col.push(temp);
  });

  res.json({
    header: col,
    data: json,
  });
});

router.post("/mailer", (req, res, next) => {
  console.log(req.body);
  mailer(req.body.data);
  res.json({
    success: true,
  });
});
router.post("/test/mailer", (req, res, next) => {
  console.log(req.body);
  // let data = req.body.data;
  let { primary, secondary, data, name } = req.body;
  ejs.renderFile(
    __dirname + "/email.ejs",
    { name, data, primary, secondary },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(data);
        let test = "yo@gmail.com";
        let mailDetails = {
          from: "yoman@helo.in",
          to: test,
          subject: "Event Registration",
          attachDataUrls: true,
          html: data,
        };
        (async () => {
          let info = await Transporter.sendMail(mailDetails);
          console.log("Message sent: %s", info.messageId);
        })();
      }
    }
  );
  res.json(true);
});
//TEST ROUTE 👇
router.post("/test/savepeople", (req, res, next) => {
  // console.log(req.body);
  let eventId = "5f3162bba2387e623c699053";
  savePeople(req.body, eventId);
  // let { reg, name, branch } = req.body;
  // let { reg, name, branch, eventId } = req.body;
  // savePeople(reg, name, branch, eventId);
  res.json("done");
});
module.exports = router;
// 5f3162bba2387e623c699053
