var express = require("express");
var router = express.Router();

var events = require("../controller/db");

router.get("/", async (req, res, next) => {
  let username = "yoman";
  let data = await events(username);
  let name = [];
  //IF YOU WANT TO HAVE DATA FROM ARRAY JUST LOOP IT OVER

  data.events.forEach((item) => {
    name.push(item.name);
  });
  console.log(name);
  res.json(name);
});

module.exports = router;