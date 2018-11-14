const passport = require('passport');
const express = require('express');
const router = express.Router();

router.get("/auth/google", passport.authenticate('google', {
	scope: ['profile', 'email']
}));
router.get("/auth/google/callback", passport.authenticate('google'));

module.exports = router;