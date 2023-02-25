const logger = require("../config/logger");
const jwt = require("jsonwebtoken");
require("dotenv").config();
let SignUp = require("../models/signUp");
const { request } = require("express");

const signUpController = async (req, res, next) => {
  logger.info("signUpController");
  const password = req.body.password;
  const email = req.body.email;
  const accessToken = jwt.sign(
    { email, password },
    process.env.ACCESS_SECRET_TOKEN
  );

  SignUp.findOne({ email: email}, async(err,user) => {
    if(err){
        console.log(err)
    }
    else if(user){
        res.status(409).json({message:'Email already exists'})
        console.log('email already exists')
        return
    }
    else{
        console.log('email does not exist so user can sign up')
        const newUser = new SignUp({ email, password });
        await newUser
          .save()
          .then(() => {
            res.status(200).json({accessToken});
            logger.info("User added successfully");
          })
          .catch((err) => {
            err.type = "enter username and description";
            next(err);
          });
    }
  })
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

exports.signUpController = signUpController;
exports.authenticateToken = authenticateToken;
