require("../config/dbConfig");
var user = require("../models/user");
var event = require("../models/event");
var people = require("../models/person");

const events = (username) => {
  return user
    .findOne({ username })
    .populate("events")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = events;
