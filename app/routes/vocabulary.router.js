var express = require("express");
var router = express.Router();
var vocaController = require("../controllers/vocabulary.controller");

router.get("/getbylesson/:id", vocaController.get_VocabularyByLesson);

module.exports = router;
