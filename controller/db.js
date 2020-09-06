require("../config/dbConfig");
var user = require("../models/user");
var event = require("../models/event");
var people = require("../models/person");

const homeData = (id) => {
  return event
    .find({ user: id })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

const events = (username) => {
  return event
    .findOne({ name: username })
    .populate("public.name")
    .then((res) => {
      // console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

const saveEvent = (id, name, attendence) => {
  let newEvent = new event({
    user: id,
    name,
    attendence,
  });
  newEvent.save().catch((err) => console.log(err));
  return user
    .findByIdAndUpdate(id, {
      $push: {
        events: newEvent._id,
      },
    })
    .then((res) => {
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

const savePeople = (reg, name, branch) => {
  let newPeople = new people({
    reg,
    name,
    branch,
  });
  newPeople.save().catch((err) => console.log(err));
  var yoman = {
    name: newPeople._id,
  };

  event.findOneAndUpdate(
    { name: "Bhai" },
    {
      $push: {
        public: yoman,
      },
    },
    (err, res) => {
      if (err) console.log(err);
      // else console.log(res);
    }
  );
};

module.exports = { events, savePeople, homeData, saveEvent };
