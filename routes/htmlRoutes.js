
const path = require("path");
const express = require('express');
const app = express();
const router = express.Router();

// ROUTING

app.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
  .catch((err) => {
    res.json(err);
  });
})

app.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});
// return to home if there is no match
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;