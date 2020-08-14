var express = require('express');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var passport = require('passport');
var localStrategy = require('passport-local');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var session = require('express-session');
var User = require('./models/user');

var app = express();

mongoose.connect(
	'mongodb+srv://kunalsinghal:Y9lu1JXvDM1tS0ou@cluster0-jlomh.mongodb.net/users?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	() => {
		console.log('mongoose');
	}
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
	cors({
		origin: 'http://localhost:3000',
		credentials: true
	})
);

app.use(
	session({
		secret: 'secret',
		resave: true,
		saveUninitialized: true
	})
);

app.use(cookieParser('secret'));

app.use(passport.initialize());
app.use(passport.session());

require('./passportConfig')(passport);

app.use('/', indexRouter);

module.exports = app;
