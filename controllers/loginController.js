const logger = require("../config/logger");
const jwt = require("jsonwebtoken");
const { createLogger } = require("winston");
require("dotenv").config();

const loginController = async (req, res, next) => {
  logger.info("loginController");

  const username = req.body.username;
  const user = { username: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_SECRET_TOKEN);
  res.json({accessToken});
};

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]; //retrieve authorization header
  const token = authHeader && authHeader.split(" ")[1]; //split authorization header into ['Bearer', 'Token']
  
  if (token == null) return res.sendStatus(401);
  //token is valid from this point
  jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, user) => {
    console.log(token);
    console.log(process.env.ACCESS_SECRET_TOKEN);
    console.log(user)
    if (err) return res.sendStatus(403); //token didn't match so access is denied with 403 msg
    req.user = user; //user is set to current user
    next();
  });
};

exports.loginController = loginController;
exports.authenticateToken = authenticateToken;
