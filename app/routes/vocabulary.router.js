var express = require("express");
var router = express.Router();
var vocaController = require("../controllers/vocabulary.controller");

router.get("/getbylesson/:id", vocaController.get_VocabularyByLesson);
router.get("/getbycourse/:id", vocaController.get_AllVocabularyByCourse);
router.get("/getbyfolder/:id", vocaController.get_AllVocabularyByFolder);

module.exports = router;
