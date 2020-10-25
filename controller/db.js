require("../config/dbConfig");
var user = require("../models/user");
var event = require("../models/event");
var people = require("../models/person");
const { findByIdAndRemove } = require("../models/user");

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

const saveEvent = (id, name, attendence, startDate, endDate) => {
  let newEvent = new event({
    user: id,
    name,
    attendence,
    startDate,
    endDate,
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

const savePeople = (body, eventId) => {
  let newPeople = new people({ ...body, events: { eventId } });
  console.log(newPeople);
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
const formData = (data) => {
  data.people.forEach((item) => {
    let newPeople = new people(item);
    newPeople.save().catch((err) => console.log(err));
    var yoman = {
      name: newPeople._id,
    };

    event.findOneAndUpdate(
      { name: data.eventName },
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
    // console.log(item);
  });
};
const getEvent = (name) => {
  return event
    .findOne({
      name,
    })
    .then((res) => {
      let data = {
        id: res._id,
        name: res.name,
        attendence: res.attendence,
        startDate: res.startDate,
        endDate: res.endDate,
      };
      console.log(data);
      return data;
    })
    .catch((err) => console.log(err));
};
const editEvent = (data) => {
  let { id, name, num, startDate, endDate } = data;
  event
    .findByIdAndUpdate(id, {
      name,
      attendence: num,
      startDate,
      endDate,
    })
    .then((res) => {
      return true;
    })
    .catch((err) => console.log(err));
};

const deleteParticipate = (id, eventId) => {
  console.log(eventId);
  people
    .findByIdAndRemove(id)
    .then()
    .catch((err) => console.log(err));
  event
    .updateOne(
      { name: eventId },
      {
        $pull: {
          public: {
            name: id,
          },
        },
      }
    )
    .exec()
    .catch((err) => console.log(err));
};

const userData = (id) => {
  return user
    .findById(id)
    .populate("events")
    .then((res) => {
      return res;
    });
};

module.exports = {
  events,
  savePeople,
  homeData,
  saveEvent,
  userData,
  formData,
  getEvent,
  editEvent,
  deleteParticipate,
};
