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
