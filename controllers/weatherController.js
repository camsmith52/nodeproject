const openweathermap = require("../apis/openweathermap");
const logger = require("../config/logger");

const weatherController = async (req, res, next) => {
  console.log("second service route");

  await openweathermap
    .get("/geo/1.0/direct", {
      params: {
        q: req.params.city,
        limit: 3,
      },
    })
    .then((response) => {
      res.json(response.data[0].lat); //just returning latitude of country city is in
      logger.info("response received from api");
    })
    .catch((err) => {
      err.type = "redirect";
      next(err);
    });
};

exports.weatherController = weatherController;
