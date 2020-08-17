var express = require("express");
var router = express.Router();
var passport = require("passport");
var bcrypt = require("bcrypt");
var events = require("../controller/db");
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
  let name = [];

  //IF YOU WANT TO HAVE DATA FROM ARRAY JUST LOOP IT OVER

  data.events.forEach((item) => {
    name.push(item.name);
  });
  let date = new Date();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(date);
  // console.log(name);
  res.json(name);
});

module.exports = router;
