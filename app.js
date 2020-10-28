var express = require("express");
var cookieParser = require("cookie-parser");
var cors = require("cors");
// var passport = require("passport");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var fetch = require("./controller/fetch-cron");
// var session = require("cookie-session");
// var session = require("express-session");
// require("./config/passportConfig")(passport);
// var mongoose = require("mongoose");
// var User = require("./models/user");

var app = express();
fetch();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(cookieParser());

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

app.use("/", indexRouter);

module.exports = app;
