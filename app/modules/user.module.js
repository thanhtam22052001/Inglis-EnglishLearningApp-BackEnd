const db = require("../common/connection");
const User = function (user) {
  this.ID_User = user.ID_User;
  this.Name = user.Name;
  this.Phone = user.Phone;
  this.Email = user.Email;
  this.Job = user.Job;
  this.Point = user.Point;
  this.Rank = user.Rank;
  this.Type = user.Type;
  this.Time = user.Time;
};

User.getUserByID = function (id, result) {
  db.query(
    "SELECT * FROM user where ID_User = ?",
    [id],
    function (err, data, fields) {
      console.log(err);
      result(data);
    }
  );
};

User.updateRank = function (id, rank, result) {
  db.query(
    "UPDATE user SET user.Rank = ? WHERE ID_User = ?",
    [rank, id],
    function (err, data, fields) {
      console.log(err);
      result(data);
    }
  );
};

User.updateUser = function (name, phone, job, id) {
  db.query(
    "UPDATE user SET user.Name = ?, user.Phone = ?, user.Job = ? WHERE ID_User = ?",
    [name, phone, job, id],
    function (err, data, fields) {
      console.log(err);
      result(data);
    }
  );
};
User.insert_User = function (newUser, result) {
  db.query(
    "INSERT INTO user values (?,?,?,?,?,?,?,?,?)",
    [
      newUser.ID_User,
      newUser.Name,
      newUser.Email,
      newUser.Phone,
      newUser.Job,
      newUser.Point,
      newUser.Rank,
      newUser.Type,
      newUser.Time,
    ],
    function (err, data, fields) {
      if (err) {
        console.log(err);
        result(err);
      } else result("thanh cong");
    }
  );
};

User.get_WordDoneAndRank = function (id, result) {
  let qr =
    "select count(d.ID_Vocabulary) as numWords , u.Rank as level from detaillearning d, user u where  d.ID_User =  u.ID_User and  d.ID_User = ? ;";
  db.query(qr, [id], function (err, data, fields) {
    console.log(err);
    result(data);
  });
};
module.exports = User;
