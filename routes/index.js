var express = require("express");
var router = express.Router();
var passport = require("passport");
var bcrypt = require("bcrypt");
var { events, savePeople, homeData, saveEvent } = require("../controller/db");
var User = require("../models/user");

router.post("/login", function (req, res, next) {
  passport.authenticate("local", (err, user) => {
    if (err) throw err;
    if (!user) {
      res.json(false);
    } else {
      req.logIn(user, (err) => {
        if (err) throw err;
        // console.log(res);
        res.json(true);
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

router.get("/bardata", async (req, res, next) => {
  // TODO EVENT HARDCODED
  let username = "yoman";
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

router.get("/piechart", async (req, res, next) => {
  // TODO EVENT HARDCODED
  let username = "yoman";
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
  //TODO ID HARDCODED
  let id = "5f316249bf8263611807b23d";
  let data = await homeData(id);
  data.forEach((item) => {
    body.push({
      name: item.name,
      no: item.public.length,
    });
  });
  res.json(body);
});
// TODO ID HARDCODED
router.post("/newevent", async (req, res, next) => {
  let id = "5f316249bf8263611807b23d";
  let { name, attendence } = req.body;
  let status = await saveEvent(id, name, attendence);
  res.json(status);
});

//TEST ROUTE 👇
router.post("/test/savepeople", (req, res, next) => {
  // console.log(req.body);
  // let reg = "RA1911028015115";
  // let name = "Lalu";
  // let branch = "MECH";
  let { reg, name, branch } = req.body;
  savePeople(reg, name, branch);
  res.json("done");
});
module.exports = router;
