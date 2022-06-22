const learningModule = require("../modules/learning.module");

exports.get_CourseDone = function (req, res) {
  learningModule.get_CourseDone(req.params.id, function (data) {
    res.send({ result: data });
  });
};
exports.get_RecommendCourse = function (req, res) {
  learningModule.get_RecommendCourse(req.params.id, function (data) {
    res.send({ result: data });
  });
};
exports.insert_Learning = function (req, res) {
  console.log(JSON.stringify(req.body) + "hello");
  var newUser = {
    ID_User: req.body.ID_User,
    ID_Course: req.body.ID_Course,
    ID_Lesson: req.body.ID_Lesson,
    State: req.body.State,
    Time: 0,
    Memorized: 0,
    No_Memorized: 0,
    Max_Point: 0,
  };

  learningModule.insert_Learning(newUser, function (data) {
    res.send({ result: data });
  });
};
