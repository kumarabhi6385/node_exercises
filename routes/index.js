const express = require("express");

const router = express.Router();

router.use(express.static("./public"));
router.use("/", express.static("./public/html"));

// return page not found error
router.use((req, res) => {
  res.sendFile("pagenotfound.html", { root: "./public/html" });
});

module.exports = router;
