const db = require("../common/connection");
const Rank = function (rank) {
  this.ID_User = rank.ID_User;
  this.Name = rank.Name;
  this.Rank = rank.Rank;
};

Rank.getAll = function (result) {
  db.query(
    "SELECT ID_User as id, name , user.Rank as level FROM user ORDER BY Point DESC",
    function (err, data, fields) {
      console.log(err);
      result(data);
    }
  );
};
module.exports = Rank;
