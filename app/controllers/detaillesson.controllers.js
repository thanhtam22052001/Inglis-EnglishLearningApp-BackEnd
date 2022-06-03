const detailLessonModule = require("../modules/detaillesson.module");

exports.get_SumWordDone = function (req, res) {
  detailLessonModule.get_SumWordDone(req.params.id, function (data) {
    res.send({ result: data });
  });
};
exports.get_SumWordNotDone = function (req, res) {
  detailLessonModule.get_SumWordNotDone(req.params.id, function (data) {
    res.send({ result: data });
  });
};
exports.get_LessonDone = function (req, res) {
  detailLessonModule.get_LessonDone(req.params.id, function (data) {
    res.send({ result: data });
  });
};
