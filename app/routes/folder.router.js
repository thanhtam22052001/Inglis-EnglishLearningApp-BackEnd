var express = require("express");
var router = express.Router();
var folderController = require("../controllers/folder.controller");

router.get("/:id", folderController.get_AllFolder);
router.get("/folderexistByID/:id", folderController.get_FolderExistByID);
router.get("/folderexist", folderController.get_FolderExist);
router.post("/insert", folderController.insert_newFolder);
router.post("/insertword", folderController.insert_WordFolder);
router.put("/updatenumword/:id", folderController.updateNumWordFolder);
router.put("/updatenameword/:name/:id", folderController.updateNameFolder);
router.delete("/deletedetail/:id", folderController.DeleteDetailFolder);
router.delete("/deletefolder/:id", folderController.DeleteFolder);
module.exports = router;
