const mongoose = require('mongoose');
const user_schema = new mongoose.Schema({
	googleID: String
});

module.exports = mongoose.model("User", user_schema);