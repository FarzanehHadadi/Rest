const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  console.log("req.body");
});
router.get("/specific", (req, res) => {
  res.send("Specific post");
});
module.exports = router;
