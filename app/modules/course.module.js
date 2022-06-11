const db = require("../common/connection");
const Course = function (course) {
  this.ID_Course = course.ID_Course;
  this.Name_Course = course.Name_Course;
  this.Information = course.Information;
  this.Number_Lesson = course.Number_Lesson;
  this.Level = course.Level;
};

Course.getall = function (result) {
  db.query(
    "select c.ID_Course as  id, c.Name_Course as  title, c.Number_Lesson as numLesson, c.Level as level, c.Information as desciption, c.Uri as source from course c;",
    function (err, data, fields) {
      console.log(err);
      result(data);
    }
  );
};
Course.getContent = function (id, result) {
  db.query(
    "SELECT Content FROM course where ID_Course = ?",
    [id],
    function (err, data, fields) {
      console.log(err);
      result(data);
    }
  );
};

Course.getCourse_ById = function (id, result) {
  console.log(id);
  db.query(
    "SELECT * FROM course where ID_Course = ?",
    [id],
    function (err, data, fields) {
      console.log(err);
      result(data);
    }
  );
};

Course.insert_Course = function (newCourse, result) {
  db.query(
    "INSERT INTO course values (?,?,?,?,?)",
    [
      newCourse.ID_Course,
      newCourse.Name_Course,
      newCourse.Information,
      newCourse.Number_Lesson,
      newCourse.Level,
    ],
    function (err, data, fields) {
      if (err) {
        result(err);
      } else result("thanh cong");
    }
  );
};

Course.get_CourseDone = function (id, result) {
  let qr =
    "select l.ID_Course as numCourse from lesson l, detaillearning d " +
    "where d.ID_User = ? and l.ID_Lesson = d.ID_Lesson " +
    "group by l.ID_Course, d.ID_Lesson";
  db.query(qr, [id], function (err, data, fields) {
    console.log(err);
    result(data);
  });
};
module.exports = Course;
