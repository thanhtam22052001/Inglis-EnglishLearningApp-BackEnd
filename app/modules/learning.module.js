const db = require("../common/connection");
const Learning = function (learning) {};
Learning.get_CourseDone = function (id, result) {
  let qr =
    "select c.ID_Course as  id, c.Name_Course as  title, c.Number_Lesson as numLesson, c.Level as level, c.Information as desciption, c.Uri as source, count(l.ID_Lesson) as numLessonDone " +
    "from course c, learning l " +
    "where c.ID_Course = l.ID_Course and l.ID_User = ? " +
    "group by c.ID_Course;";
  db.query(qr, [id], function (err, data, fields) {
    console.log(err);
    result(data);
  });
};

Learning.get_RecommendCourse = function (id, result) {
  let qr =
    "select c.ID_Course as  id, c.Name_Course as  title, c.Number_Lesson as numLesson, c.Level as level, c.Information as desciption, c.Uri as source from course c where   c.ID_Course NOT IN (select k.ID_Course from learning k where k.ID_User = ?);";
  db.query(qr, [id], function (err, data, fields) {
    console.log(err);
    result(data);
  });
};

Learning.insert_Learning = function (newUser, result) {
  db.query(
    "INSERT INTO learning values (?,?,?,?,?,?,?,?)",
    [
      newUser.ID_User,
      newUser.ID_Course,
      newUser.ID_Lesson,
      newUser.State,
      newUser.Time,
      newUser.Memorized,
      newUser.No_Memorized,
      newUser.Max_Point,
    ],
    function (err, data, fields) {
      if (err) {
        console.log(err);
        result(err);
      } else result("thanh cong");
    }
  );
};
module.exports = Learning;
