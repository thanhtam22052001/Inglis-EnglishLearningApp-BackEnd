const folderModule = require("../modules/folder.module");

exports.get_AllFolder = function (req, res) {
  folderModule.get_AllFolder(req.params.id, function (data) {
    res.send({ result: data });
  });
};
exports.get_FolderExistByID = function (req, res) {
  folderModule.get_FolderExistByID(req.params.id, function (data) {
    res.send({ result: data });
  });
};

exports.get_FolderExist = function (req, res) {
  folderModule.get_FolderExist(req.params.id, function (data) {
    res.send({ result: data });
  });
};
exports.insert_newFolder = function (req, res) {
  console.log(JSON.stringify(req.body) + "hello");
  var newUser = {
    ID_Folder: req.body.ID_Folder,
    Name_Folder: req.body.Name_Folder,
    Number: req.body.Number,
    ID_User: req.body.ID_User,
    Num_Word: req.body.Num_Word,
    Date: req.body.Date,
  };

  folderModule.insert_newFolder(newUser, function (data) {
    res.send({ result: data });
  });
};
exports.insert_WordFolder = function (req, res) {
  console.log(JSON.stringify(req.body) + "hello");
  var newUser = {
    ID_Folder: req.body.ID_Folder,
    ID_Vocabulary: req.body.ID_Vocabulary,
  };

  folderModule.insert_WordFolder(newUser, function (data) {
    res.send({ result: data });
  });
};
exports.updateNameFolder = function (req, res) {
  folderModule.updateNameFolder(
    req.params.name,
    req.params.id,
    function (data) {
      res.send({ result: data });
    }
  );
};
exports.updateNumWordFolder = function (req, res) {
  folderModule.updateNumWordFolder(req.params.id, function (data) {
    res.send({ result: data });
  });
};
exports.DeleteDetailFolder = function (req, res) {
  folderModule.DeleteDetailFolder(req.params.id, function (data) {
    res.send({ result: data });
  });
};
exports.DeleteFolder = function (req, res) {
  folderModule.DeleteFolder(req.params.id, function (data) {
    res.send({ result: data });
  });
};
