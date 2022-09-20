const logger = require("../config/logger");
let User = require("../models/users.model");

const getController = async (req, res, next) => {
  res.send("working");
  await User.find()
    .then((users) => {
      res.json(users);
      logger.info("Users found");
    })
    .catch((err) => next(err));
};

const addController = async (req, res, next) => {
  const username = req.body.username;
  const description = req.body.description;

  const newUser = new User({ username, description });

  await newUser
    .save()
    .then(() => {
      res.status(200).json(newUser);
      logger.info("User added successfully");
    })
    .catch((err) => next(err));
};

const editController = async (req, res, next) => {
  await User.findByIdAndUpdate(req.params.id, {
    username: req.body.username,
    description: req.body.description,
  })
    .then(() => {
      res.status(200).json("User successfully updated");
      logger.info("User updated successfully");
    })
    .catch((err) => next(err));
};

const patchController = async (req, res, next) => {
  await User.findByIdAndUpdate(req.params.id, {
    description: req.body.description,
  })
    .then(() => {
      res.status(200).json("User successfully patched");
      logger.info("User updated successfully");
    })
    .catch((err) => next(err));
};

const deleteController = async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json("Successfully deleted");
      logger.info("User deleted successfully");
    })
    .catch((err) => next(err));
};

exports.deleteController = deleteController;
exports.editController = editController;
exports.patchController = patchController;
exports.addController = addController;
exports.getController = getController;
