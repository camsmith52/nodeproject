const express = require("express");
const catchAsync = require("../catchAsync");
const loginController = require("../controllers/loginController");
const router = express.Router();

//Dummy DATA
const POSTS = [
  {
    username: "admin",
    title: "admin",
  },
  {
    username: "user",
    title: "user",
  },
];



router.route("/").post(loginController.loginController);

router.route("/").get(loginController.authenticateToken, (req, res) => {
  res.json(POSTS.filter((post) => post.username === req.user.username));
});


module.exports = router;


