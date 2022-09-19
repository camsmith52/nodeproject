const login = require("../routes/login");

const request = require("supertest");

const express = require("express");
const router = express.Router();
const app = express();
app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", login);

test("login is defined and is a function", () => {
  expect(login).toBeDefined();
  expect(typeof login).toEqual("function");
});

// test("login route works", (done) => {
//   request(app)
//     .post("/")
//     .expect("Content-Type", "application/json; charset=utf-8")
//     // .expect({ username: "frodo", description: "hobbit" })
//     .expect(200, done);
// });
