var express = require("express");
var app = express();
var router = express.Router();
// var passport = require("passport");
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
var jwt = require("jsonwebtoken");
var auth = require("../Middleware/auth");
const { use } = require("../config/mailConfig");
// const { eventNames } = require("../config/mailConfig");

// router.get("/isAuth", function (req, res, next) {
//   // console.log(req.user);
//   console.log(req.session);
//   if (req.isAuthenticated()) {
//     return res.json({
//       user: req.user,
//       status: true,
//     });
//   } else {
//     return res.json({
//       error: "Not authenticated",
//       status: false,
//     });
//   }
// });

router.post("/login", async function (req, res, next) {
  // passport.authenticate("local", (err, user) => {
  //   if (err) throw err;
  //   if (!user) {
  //     res.json({ status: false });
  //   } else {
  //     req.logIn(user, (err) => {
  //       if (err) throw err;

  //       // console.log(res);

  //       res.json({
  //         userInfo: user,
  //         status: true,
  //       });
  //     });
  //   }
  // })(req, res, next);
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ msg: "Please enter all the fields" });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      console.log("User does not exist");
      return res.status(400).json({ msg: "User does not exist" });
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) {
        return res.status(400).json({ msg: "Wrong Credentials" });
      }
      jwt.sign(
        { id: user._id },
        "jwtToken",
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          return res
            .status(200)
            .json({ token, user: { username: user.username, id: user.id } });
        }
      );
    });

    // const isMatch = bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //   console.log("Wrong Credentials");
    //   return res.status(400).json({ msg: "Wrong Credentials" });
    // }

    // const token = jwt.sign({ id: user._id }, "jwtToken", { expiresIn: 3600 });
    // if (!token) {
    //   console.log("Could'nt sign the token");
    // }

    // res.status(200).json({
    //   token,
    //   user: { id: user._id, name: user.username },
    //   status: true,
    // });
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
    name: user.username,
    id: user._id,
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

router.get("/home/bargraph", async (req, res, next) => {
  let body = [];
  let id = req.session.passport.user;
  // let id = "5f316249bf8263611807b23d";
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
