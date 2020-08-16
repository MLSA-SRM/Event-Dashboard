var express = require('express');
var router = express.Router();
var passport = require('passport');
var bcrypt = require('bcrypt');
var User = require('../models/user');

router.post('/login', function(req, res, next) {
	passport.authenticate('local', (err, user) => {
		if (err) throw err;
		if (!user) {
			res.json(false);
		} else {
			req.logIn(user, (err) => {
				if (err) throw err;
				console.log(res);
				res.json(true);
			});
		}
	})(req, res, next);
});

router.post('/register', function(req, res) {
	User.findOne({ username: req.body.username }, async (err, doc) => {
		if (err) throw err;
		if (doc) {
			res.json(false);
		}
		if (!doc) {
			const hashedPassword = await bcrypt.hash(req.body.password, 10);
			let newUser = new User({
				username: req.body.username,
				password: hashedPassword
			});
			await newUser.save();
			res.json(true);
		}
	});
});

/* GET home page. */
router.get('/', (req, res, next) => {
	res.send('Welcome');
});

module.exports = router;
