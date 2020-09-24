var express = require("express");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var passport = require("passport");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);
require("./config/passportConfig")(passport);
var mongoose = require("mongoose");
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

app.use("/", indexRouter);

module.exports = app;
