const express = require("express");
var router = express.Router();
var rankController = require("../controllers/rank.controller");

router.get("/rank", rankController.getRank);

module.exports = router;
