const rankModule = require("../modules/rank.module");

exports.getRank = function (req, res) {
  rankModule.getAll(function (data) {
    res.send({ result: data });
  });
};
