var express = require("express");
var mongoose = require("mongoose");
const db = require("./models/index.js")
const workout = require("./models/workout.js")
const htmlRoutes = require("./routes/htmlRoutes.js");
const apiRoutes = require("./routes/apiRoutes.js");
const logger = require("morgan");
const app = express();
const PORT = process.env.PORT || 5080;
require('dotenv/config');


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect('process.env.MONGODB_URI',
{ useNewUrlParser: true},
  ()=>
  console.log('connected to DB!')
);

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
