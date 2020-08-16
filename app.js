var express = require("express");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var passport = require("passport");
var logger = require("morgan");
var mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var session = require("express-session");
// var User = require("./models/user");

var app = express();

/////////////////////////////////////////////////////////////////////////////////
// CONNECT TO DATABASE
/////////////////////////////////////////////////////////////////////////////////

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cookieParser("secret"));

app.use(passport.initialize());
app.use(passport.session());

require("./passportConfig")(passport);

app.use("/", indexRouter);

module.exports = app;
