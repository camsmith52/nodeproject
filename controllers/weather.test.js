const weather = require("../routes/weather");

const request = require("supertest");

const express = require("express");
const router = express.Router();
const app = express();
app.use(router);
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/", weather);

test("weather is defined and is a function", () => {
  expect(weather).toBeDefined();
  expect(typeof weather).toEqual("function");
});

test("weather calls returns an object", (done) => {
  request(app)
    .get("/:london")
    // .expect("Content-Type", "application/json; charset=utf-8")
    .expect({})
    .expect(200, done);
});




// test("weather route works", (done) => {
//   request(app)
//     .get("/")
//     // .expect("Content-Type", "application/json; charset=utf-8")
//     .expect(res.data[0].toBe(typeof Number))
//     .expect(200, done);
// });
