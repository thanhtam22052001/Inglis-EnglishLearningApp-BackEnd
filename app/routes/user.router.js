var express = require("express");
var router = express.Router();
var userController = require("../controllers/user.controller");

router.get("/:id", userController.getUserByID);
router.post("/insert", userController.insert_User);
router.get("/summary/:id", userController.get_WordDoneAndRank);
router.put("/update/:id/:rank", userController.updateRank);
router.put("/updateuser/:name/:phone/:job/:id", userController.updateUser);

module.exports = router;
