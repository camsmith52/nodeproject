const express = require("express");
const catchAsync = require("../catchAsync");
const usersController = require("../controllers/usersController");
const router = express.Router();

router.route("/").get(usersController.getController);

router.route("/add").post(usersController.addController);

router.route("/edit/:id").put(usersController.editController);

router.route("/patch/:id").patch(usersController.patchController);

router
.route("/delete/:id")
.delete(usersController.deleteController);



module.exports = router;