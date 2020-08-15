var express = require('express');
var router = express.Router();
var passport = require('passport');
var bcrypt = require('bcrypt');
var User = require('../models/user');

router.post('/login', function(req, res, next) {
	passport.authenticate('local', (err, user) => {
		if (err) throw err;
		if (!user) {
			res.send('No user found');
		} else {
			req.logIn(user, (err) => {
				if (err) throw err;
				console.log(res);
				res.send('You are successfully Logged In ' + user.username);
			});
		}
	})(req, res, next);
});

router.post('/register', function(req, res) {
	User.findOne({ username: req.body.username }, async (err, doc) => {
		if (err) throw err;
		if (doc) {
			res.send(false);
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

/* GET home page. */
router.get('/', (req, res, next) => {
	res.send('Welcome');
});

module.exports = router;
