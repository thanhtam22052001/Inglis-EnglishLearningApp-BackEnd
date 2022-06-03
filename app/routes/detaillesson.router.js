var express = require("express");
var router = express.Router();
var detailLessonController = require("../controllers/detaillesson.controllers");

router.get("/worddone/:id", detailLessonController.get_SumWordDone);
router.get("/wordnotdone/:id", detailLessonController.get_SumWordNotDone);
router.get("/lessondone/:id", detailLessonController.get_LessonDone);

module.exports = router;
