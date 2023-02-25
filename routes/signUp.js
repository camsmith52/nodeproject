const express = require("express");
const catchAsync = require("../catchAsync");
const signUpController = require("../controllers/signUpController");
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

router
  .route("/")
  .post( signUpController.signUpController);

router.route("/").get(signUpController.authenticateToken, (req, res) => {
  res.json(POSTS.filter((post) => post.username === req.user.username));
});

module.exports = router;
