var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", { title: "DIMLAB | 数据实验室" });
});

module.exports = router;
