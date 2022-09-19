const axios = require("axios/lib/axios");
require("dotenv").config();

module.exports= axios.create({
  baseURL: "http://api.openweathermap.org",
  params: {
    appid: process.env.API_KEY,
  },
});
