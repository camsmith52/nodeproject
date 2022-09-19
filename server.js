//Imports
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const loginRoute = require("./routes/login");
const weatherRoute = require("./routes/weather");
const usersRoute = require("./routes/users");
const logger = require("./config/logger");

require("dotenv").config();

//App initialisation and middleware
const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

//Port
const port = process.env.PORT || 5000;

//Connection to mongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//Routes
app.use("/users", usersRoute);
app.use("/login", loginRoute);
app.use("/weather", weatherRoute);

app.get("/error", () => {
  console.log(" error landing page");
});

//Error handling middleware

app.use(errorLogger);
app.use(errorResponder);
app.use(failSafeHandler);

//Custom error handling functions
function errorLogger(error, req, res, next) {
  logger.info(error.message);
  next(error); // forward to next middleware
}

function errorResponder(error, req, res, next) {
  // console.log("Error Handling Middleware called");
  // if (!res.headers) {
  //   console.log("No headers");
  // }
  if (error.type == "redirect") res.redirect("/error");
  else next(error); // forwarding exceptional case to fail-safe middleware
}

function failSafeHandler(error, req, res, next) {
  res.status(500).send(error.message);
}


//Startup
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
