const express = require('express');
const mongoose = require('mongoose');

// require models
require('./models/user.js');

//require services
require('./services/passport.js');
const keys = require('./config/keys.js');

// require routes
const route_auth = require('./routes/auth.js');

// connect database
mongoose.connect(keys.mongoURI);

var app = express();

app.use(route_auth);
app.get("/", function(req, res) {
	res.send("hello world");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);

// app.listen(process.env.PORT||5000, process.env.IP, function() {
//     console.log("Server listening at port " + process.env.PORT + "...");
// });

