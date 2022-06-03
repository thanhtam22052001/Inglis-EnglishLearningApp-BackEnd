const homeModule = require("../modules/home.module");

exports.home = function (req, res) {
  homeModule.getall(function (data) {
    res.send({ result: data });
  });
};
