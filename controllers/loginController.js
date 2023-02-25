const logger = require("../config/logger");
const jwt = require("jsonwebtoken");
require("dotenv").config();
let SignUp = require("../models/signUp");
const { response } = require("express");

const loginController = async (req, res, next) => {
  logger.info("loginController");

  const password = req.body.password;
  const email = req.body.email;

  SignUp.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
      response.status(500).json({ message: "Server error" });
    } else if (!user) {
      res.status(409).json({ message: "User doesn't exist" });
      console.log("User doesn't exist");
      return;
    } else if (user.password === password) {
      console.log("User exists and password is correct");
      const accessToken = jwt.sign({email, password}, process.env.ACCESS_SECRET_TOKEN,{expiresIn:'2m'});
      res.status(201).json({accessToken});
      return;
    } else {
      console.log("User exists but password is incorrect");
      res
        .status(403)
        .json({ message: "User exists but password is incorrect" });
    }
  });
};

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]; //retrieve authorization header
  const token = authHeader && authHeader.split(" ")[1]; //split authorization header into ['Bearer', 'Token']

  if (token == null) return res.sendStatus(401);
  //token is valid from this point
  jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, user) => {
    if (err) return res.sendStatus(403); //token didn't match so access is denied with 403 msg
    req.user = user; //user is set to current user
    next();
  });
};

exports.loginController = loginController;
exports.authenticateToken = authenticateToken;
