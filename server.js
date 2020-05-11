const express = require("express");
const mongoose = require ("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const routes = require("./routes");
const eventsRouter = require("./routes/api/liveEvents.js");
const usersRouter = require("./routes/api/users.js");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}


app.use("/api/events", eventsRouter);
app.use("/api/users", usersRouter);
app.use("/", routes);

// Connect to the Mongo DB
mongoose.connect(
  //mongodb://user:password1@ds145356.mlab.com:45356/heroku_ttwmczm8
  process.env.MONGODB_URI || "mongodb://user:password1@ds145356.mlab.com:45356/heroku_ttwmczm8",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

// Send every request to the React app
// Define any API routes before this runs
// app.get('*', function(req, res) {
// 	res.sendFile(path.join(__dirname, './client/build/index.html'));
// });

app.listen(PORT, function() {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
