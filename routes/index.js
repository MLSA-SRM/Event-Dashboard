var express = require("express");
var app = express();
var router = express.Router();
var passport = require("passport");
var bcrypt = require("bcrypt");
var {
  events,
  savePeople,
  homeData,
  saveEvent,
  userData,
} = require("../controller/db");
var mailer = require("../controller/mailer");
var User = require("../models/user");
// const { eventNames } = require("../config/mailConfig");

router.post("/login", function (req, res, next) {
  passport.authenticate("local", (err, user) => {
    if (err) throw err;
    if (!user) {
      res.json({ status: false });
    } else {
      req.logIn(user, (err) => {
        if (err) throw err;
        // console.log(res);
        res.json({
          userInfo: user,
          status: true,
        });
      });
    }
  })(req, res, next);
});

router.post("/register", function (req, res) {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) {
      res.json(false);
    }
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      let newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.json(true);
    }
  });
});

router.get("/user", async (req, res, next) => {
  let id = req.session.passport.user;
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

router.get("/logout", function (req, res, next) {
  req.logout();
  req.session.save((err) => {
    if (err) {
      return next(err);
    }
    res.json(true);
  });
});

router.post("/bardata", async (req, res, next) => {
  // console.log(Date.now());
  app.set("id", req.session.passport.user);
  let username = req.body.name;
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
  let branch = [];
  let result = [];
  data.public.forEach((item) => {
    // console.log(item.name.branch);
    branch.push(item.name.branch);
  });
  console.log(branch);
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
  console.log(result);
  res.json(result);
});

router.get("/home/bargraph", async (req, res, next) => {
  let body = [];
  let id = req.session.passport.user;
  // let id = "5f316249bf8263611807b23d";
  let data = await homeData(id);
  data.forEach((item) => {
    body.push({
      name: item.name,
      no: item.public.length,
    });
  });
  res.json(body);
});
router.post("/newevent", async (req, res, next) => {
  let id = req.session.passport.user;
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
    },
    {
      name: "Doe",
      reg: "RA002",
      email: "xyz@gmail.com",
      IQ: "320",
      lang: "cpp",
    },
    {
      name: "Doe",
      reg: "RA002",
      email: "xyz@gmail.com",
      IQ: "320",
      lang: "cpp",
    },
    {
      name: "Doe",
      reg: "RA002",
      email: "xyz@gmail.com",
      IQ: "320",
      lang: "cpp",
    },
    {
      name: "Doe",
      reg: "RA002",
      email: "xyz@gmail.com",
      IQ: "320",
      lang: "cpp",
    },
    {
      name: "Doe",
      reg: "RA002",
      email: "xyz@gmail.com",
      IQ: "320",
      lang: "cpp",
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
