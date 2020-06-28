
const path = require("path");
const express = require('express');
const app = express();
const router = require("express").Router();

// ROUTING

router.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
  //   .catch((err) => {
  //   res.json(err);
  // });
})

router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// return to home if there is no match
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;