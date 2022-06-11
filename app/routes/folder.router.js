var express = require("express");
var router = express.Router();
var folderController = require("../controllers/folder.controller");

router.get("/:id", folderController.get_AllFolder);
router.get("/folderexist/:id", folderController.get_FolderExist);
module.exports = router;
