const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');
const keys = require('../config/keys.js');

passport.use(new googleStrategy({
	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret,
	callbackURL: '/auth/google/callback'
}, function(accessToken, refreshToken, profile, done) {
	console.log(profile.id);
	User.findOne({googleID: profile.id}, function(err, foundUser) {
		if(err) {
			console.log(err);
		} else {
			if(foundUser) {
				console.log("find user");
				done(null, foundUser);
			} else {
				console.log("no match");
				// new User({googleID: profile.id}).save();
				User.create({}, function(err, newUser) {
					if(err) {
						console.log(err);
					} else {
						newUser.googleID = profile.id;
						newUser.save();
						done(null, newUser);
					}
				});
			}
		}
	});
}));