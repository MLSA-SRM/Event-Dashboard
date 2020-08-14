var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.post('/register', function(req, res) {
	console.log(req.body);
	User.findOne({ username: req.body.username }, async (err, doc) => {
		if (err) throw err;
		if (doc) {
			res.send('User already Exist');
		}
		if (!doc) {
			const hashedPassword = await bcrypt.hash(req.body.password, 10);
			let newUser = new User({
				username: req.body.username,
				password: hashedPassword
			});
			await newUser.save();
			res.send('User created');
		}
	});
});

router.post('/login', function(req, res) {
	passport.authenticate('local', (err, user, info) => {
		if (err) throw err;
		if (!user) {
			res.send('No user exist');
		} else {
			req.logIn(user, (err) => {
				if (err) throw err;
				res.send('Authenticated');
			});
		}
	});
});

module.exports = router;
