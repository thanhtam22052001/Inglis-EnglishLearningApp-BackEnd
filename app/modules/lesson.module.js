const db = require("../common/connection");
const Lesson = function (Lesson) {
  this.ID_Lesson = Lesson.ID_Lesson;
  this.Name_Lesson = Lesson.Name_Lesson;
  this.Type = Lesson.Type;
  this.ID_Course = Lesson.ID_Course;
  this.Uri = Lesson.Uri;
};
Lesson.get_LessonOfCourse = function (id, idCourse, result) {
  let qr =
    "select k.ID_Lesson as id, Name_Lesson as name, Uri as uri, u.ID_Lesson as isLearned, Type as typeLesson from (select * from lesson where ID_Course = ?) k left join (select distinct(ID_Lesson) from detaillearning where ID_User = ?) u on  k.ID_Lesson = u.ID_Lesson ";
  db.query(qr, [idCourse, id], function (err, data, fields) {
    console.log(err);
    result(data);
  });
};

module.exports = Lesson;
