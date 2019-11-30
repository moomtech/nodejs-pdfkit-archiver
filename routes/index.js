const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "certificateID" });
});

module.exports = router;
