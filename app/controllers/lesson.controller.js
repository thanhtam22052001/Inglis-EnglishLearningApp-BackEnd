const LessonModule = require("../modules/lesson.module");

exports.get_LessonOfCourse = function (req, res) {
  LessonModule.get_LessonOfCourse(
    req.params.id,
    req.params.idCourse,
    function (data) {
      res.send({ result: data });
    }
  );
};
