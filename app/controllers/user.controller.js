const userModule = require("../modules/user.module");

exports.getUserByID = function (req, res) {
  userModule.getUserByID(req.params.id, function (data) {
    res.send({ result: data });
  });
};
exports.insert_User = function (req, res) {
  console.log(JSON.stringify(req.body) + "hello");
  var newUser = {
    ID_User: req.body.ID_User,
    Name: req.body.Name,
    Email: req.body.Email,
    Phone: "",
    Job: "",
    Point: 0,
    Rank: "",
    Type: "",
    Time: req.body.Time,
  };

  userModule.insert_User(newUser, function (data) {
    res.send({ result: data });
  });
};

exports.get_WordDoneAndRank = function (req, res) {
  userModule.get_WordDoneAndRank(req.params.id, function (data) {
    res.send({ result: data });
  });
};
