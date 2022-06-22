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

Folder.get_FolderExistByID = function (id, result) {
  let qr =
    "select ID_Folder as id, Name_Folder as name,Num_Word as numWords,Date as updatedAt from folder where ID_User = ?";
  db.query(qr, [id], function (err, data, fields) {
    console.log(err);
    result(data);
  });
};

Folder.get_FolderExist = function (result) {
  let qr = "select * from folder";
  db.query(qr, function (err, data, fields) {
    console.log(err);
    result(data);
  });
};

Folder.insert_newFolder = function (newUser, result) {
  db.query(
    "insert into folder values (?,?,?,?,?,?)",
    [
      newUser.ID_Folder,
      newUser.Name_Folder,
      newUser.Number,
      newUser.ID_User,
      newUser.Num_Word,
      newUser.Date,
    ],
    function (err, data, fields) {
      if (err) {
        console.log(err);
        result(err);
      } else result("thanh cong");
    }
  );
};

Folder.insert_WordFolder = function (newUser, result) {
  db.query(
    "insert into detailfolder values (?,?)",
    [newUser.ID_Folder, newUser.ID_Vocabulary],
    function (err, data, fields) {
      if (err) {
        console.log(err);
        result(err);
      } else result("thanh cong");
    }
  );
};

Folder.updateNumWordFolder = function (id, result) {
  db.query(
    "UPDATE folder SET Num_Word = Num_Word + 1 WHERE ID_Folder = ?",
    [id],
    function (err, data, fields) {
      console.log(err);
      result(data);
    }
  );
};

Folder.updateNameFolder = function (name, id, result) {
  db.query(
    "UPDATE folder SET Name_Folder = ? WHERE ID_Folder = ?",
    [name, id],
    function (err, data, fields) {
      console.log(err);
      result(data);
    }
  );
};

Folder.DeleteDetailFolder = function (id, result) {
  db.query(
    "delete from detailfolder where ID_Folder = ?",
    [id],
    function (err, data, fields) {
      console.log(err);
      result(data);
    }
  );
};
Folder.DeleteFolder = function (id, result) {
  db.query(
    "delete from folder where ID_Folder = ?",
    [id],
    function (err, data, fields) {
      console.log(err);
      result(data);
    }
  );
};
module.exports = Folder;
