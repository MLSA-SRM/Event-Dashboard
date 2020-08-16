var express = require("express");
var router = express.Router();

var events = require("../controller/db");

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
