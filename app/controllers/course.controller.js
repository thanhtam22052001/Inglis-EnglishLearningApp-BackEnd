const courseModule = require("../modules/course.module");

exports.getall_course = function (req, res) {
  courseModule.getall(function (data) {
    res.send({ result: data });
  });
};
exports.getContent = function (req, res) {
  courseModule.getContent(req.params.id, function (data) {
    res.send({ result: data });
  });
};

exports.getCourse_ByID = function (req, res) {
  courseModule.getCourse_ById(req.params.id, function (data) {
    res.send({ result: data });
  });
};
exports.insert_Course = function (req, res) {
  // console.log(req.body);
  var newCourse = {
    ID_Course: req.body.ID_Course,
    Name_Course: req.body.Name_Course,
    Information: req.body.Information,
    Number_Lesson: req.body.Number_Lesson,
    Level: req.body.Level,
  };

  courseModule.insert_Course(newCourse, function (data) {
    res.send({ result: data });
  });
};

exports.get_CourseDone = function (req, res) {
  courseModule.get_CourseDone(req.params.id, function (data) {
    res.send({ result: data });
  });
};
