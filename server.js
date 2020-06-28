const express = require("express");
const mongoose = require("mongoose");
const db = require("./models/index.js");
const workout = require("./models/workout.js");
const htmlRoutes = require("./routes/htmlRoutes.js");
const apiRoutes = require("./routes/apiRoutes.js");
const logger = require("morgan");
const app = express();
const PORT = process.env.PORT || 5080;
require('dotenv/config')

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(htmlRoutes);
app.use(apiRoutes);

app.get('/', (req, res) => {
  res.send('exercise')
});

const connection;
if (process.env.MONGO_URI){
  connection = mongoose.createConnection(process.env.MONGO_URI);
} else {
  connection = mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false
  })
};

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
