const User = require('../models/user');
const bcrypt = require('bcrypt');
const localStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
	passport.use(
		new localStrategy({ session: true }, (username, password, done) => {
			// Check whether username exist in the database
			User.findOne({ username: username }, (err, user) => {
				if (err) throw err;
				if (!user) return done(false, null);
				// if user exist then check the password enter in the login form with that in the database
				bcrypt.compare(password, user.password, (err, result) => {
					if (err) throw err;
					// User found and Credentials are correct
					if (result === true) {
						return done(null, user);
					} else {
						return done(null, false);
					}
				});
			});
		})
	);
	// Save the id
	passport.serializeUser((user, done) => {
		done(null, user.id);
	});
	passport.deserializeUser((id, done) => {
		// Find By id which is stored in session through serializing with _id
		User.findOne({ _id: id }, (err, user) => {
			done(err, user);
		});
	});
};
