const db = require("../common/connection");
const DetailLesson = function (detailLesson) {
  this.ID_User = detailLesson.ID_User;
  this.ID_Lesson = detailLesson.ID_Lesson;
  this.ID_Vocabulary = detailLesson.ID_Vocabulary;
  this.State = detailLesson.State;
};
DetailLesson.get_SumWordDone = function (id, result) {
  let qr =
    "select count(ID_Vocabulary) as WordDone from detaillearning where State = 'Yes' and ID_User = ?";
  db.query(qr, [id], function (err, data, fields) {
    console.log(err);
    result(data);
  });
};
DetailLesson.get_SumWordNotDone = function (id, result) {
  let qr =
    "select count(ID_Vocabulary) as WordNotDone from detaillearning where State = 'No' and ID_User = ?";
  db.query(qr, [id], function (err, data, fields) {
    console.log(err);
    result(data);
  });
};

DetailLesson.get_LessonDone = function (id, result) {
  let qr = "SELECT distinct(ID_Lesson) FROM detaillearning where ID_User = ?";
  db.query(qr, [id], function (err, data, fields) {
    console.log(err);
    result(data);
  });
};

module.exports = DetailLesson;
