const express = require("express");
const catchAsync = require("../catchAsync");
const weatherController = require("../controllers/weatherController");

const router = express.Router();

router.route("/:city").get(weatherController.weatherController);

module.exports = router;

//getting weather by city using call to openweather
