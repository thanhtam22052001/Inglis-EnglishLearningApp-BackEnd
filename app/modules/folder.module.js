const db = require("../common/connection");
const Folder = function (folder) {
  this.ID_Folder = folder.ID_Folder;
  this.Name_Folder = folder.Name_Folder;
  this.Number = folder.Number;
  this.ID_User = folder.ID_User;
};
Folder.get_AllFolder = function (id, result) {
  let qr =
    "select f.ID_Folder as id, f.Name_Folder as name, numWords from folder f left join (select ID_Folder, count(ID_Folder) as numWords   from detailfolder group by ID_Folder) d " +
    " on ID_User = ? and  f.ID_Folder = d.ID_Folder " +
    "group by f.ID_Folder, f.Name_Folder Order by Number DESC;";
  db.query(qr, [id], function (err, data, fields) {
    console.log(err);
    result(data);
  });
};

Folder.get_FolderExist = function (id, result) {
  let qr = "select * from folder where ID_User = ?";
  db.query(qr, [id], function (err, data, fields) {
    console.log(err);
    result(data);
  });
};
module.exports = Folder;
