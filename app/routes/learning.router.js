var express = require("express");
var router = express.Router();
var learingController = require("../controllers/learning.controller");

router.get("/getcoursedone/:id", learingController.get_CourseDone);
router.get("/getrecommendcourse/:id", learingController.get_RecommendCourse);
router.post("/insert", learingController.insert_Learning);
module.exports = router;
