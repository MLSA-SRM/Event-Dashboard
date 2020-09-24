var express = require("express");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var passport = require("passport");
var logger = require("morgan");
var indexRouter = require("./routes/index");
<<<<<<< HEAD
// var session = require("cookie-session");
// var session = require("express-session");
// require("./config/passportConfig")(passport);
// var mongoose = require("mongoose");
=======
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);
require("./config/passportConfig")(passport);
var mongoose = require("mongoose");
>>>>>>> e1265cc1b80f8c3731f8507bd7377e844b5b57b3
// var User = require("./models/user");

var app = express();

/////////////////////////////////////////////////////////////////////////////////
// CONNECT TO DATABASE
/////////////////////////////////////////////////////////////////////////////////

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(cookieParser());

<<<<<<< HEAD
// app.use(
//   session({
//     maxAge: 36000000,
//     secret: "secret",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());
=======
app.use(
  session({
    secret: "secret",
    resave: true,
    rolling: true,
    saveUninitialized: true,
    cookie: {
      expires: 1 * 60 * 60 * 1000,
      // maxAge: 1 * 60 * 60 * 1000,
    },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());
>>>>>>> e1265cc1b80f8c3731f8507bd7377e844b5b57b3

app.use("/", indexRouter);

module.exports = app;
