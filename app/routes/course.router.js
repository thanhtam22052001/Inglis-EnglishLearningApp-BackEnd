var express = require("express");
var router = express.Router();
var courseController = require("../controllers/course.controller");

router.get("/", courseController.getall_course);
router.get("/:id", courseController.getCourse_ByID);
router.get("/content/:id", courseController.getContent);
router.get("/coursedone/:id", courseController.get_CourseDone);

router.post("/newCourse", courseController.insert_Course);

module.exports = router;
