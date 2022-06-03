var express = require("express");
var router = express.Router();
var lessonController = require("../controllers/lesson.controller");

router.get("/:id/:idCourse", lessonController.get_LessonOfCourse);

module.exports = router;
