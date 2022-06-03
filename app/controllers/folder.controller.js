const folderModule = require("../modules/folder.module");

exports.get_AllFolder = function (req, res) {
  folderModule.get_AllFolder(req.params.id, function (data) {
    res.send({ result: data });
  });
};
exports.get_FolderExist = function (req, res) {
  folderModule.get_FolderExist(req.params.id, function (data) {
    res.send({ result: data });
  });
};
