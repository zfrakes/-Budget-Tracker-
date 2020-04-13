const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect ( "mongodb://heroku_1d61kk56:uotkl008cchojkqp8kmq3ub9q8@ds117846.mlab.com:17846/heroku_1d61kk56", {
  useNewUrlParser: true,
  useFindAndModify: false,
});




// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});