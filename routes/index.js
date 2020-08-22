var express = require("express");
var router = express.Router();
var passport = require("passport");
var bcrypt = require("bcrypt");
var { events, savePeople } = require("../controller/db");
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

//Piechart data config NOT WORKING
router.get("/piechart", async (req, res, next) => {
  let username = "yoman";
  let data = await events(username);
  let branch = [];
  let result = [];
  data.public.forEach((item) => {
    console.log(item.name.branch);
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
  res.json(result);
});

router.get("/test/savepeople", (req, res, next) => {
  res.json("yo");
  // let [reg, name, branch] = req.body;
  // console.log(req.body);
  let reg = "RA1911028015115";
  let name = "Lalu";
  let branch = "MECH";

  savePeople(reg, name, branch);
});
module.exports = router;
