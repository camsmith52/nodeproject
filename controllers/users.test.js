const users = require("../routes/users");

const request = require("supertest");
const express = require("express");
const app = express();
const router = express.Router();
app.use("/", users);
app.use(router);
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

test("get users route works", (done) => {
  request(app)
    .get("/")
    .expect("Content-Type", "application/json; charset=utf-8")
    .expect({ username:"frodo", description: "hobbit" })
    .expect(200, done);
});

test("testing post route", (done) => {
  request(app)
    .post("/add")
    .send({username:"frodo", description: "hobbit"})
    .then(() => {
      request(app)
        .get("/")
        .expect({username:"frodo", description: "hobbit"}, done);
    });
});

// test("testing put route", (done) => {
//   request(app)
//     .post("/add")
//     .send({ username: "frodo", description: "hobbit" })
//     .then(() => {
//       request(app)
//         .put("/edit/:id")
//         .expect({ username: "frodo", description: "new hobbit" }, done);
//     });
// });

// test("testing patch route", (done) => {
//   request(app)
//     .post("/add")
//     .send({ username: "frodo", description: "hobbit" })
//     .then(() => {
//       request(app)
//         .patch("/patch/:id")
//         .expect({ username: "frodo", description: "new hobbit" }, done);
//     });
// });

test("testing delete route", (done) => {
  request(app)
    .post("/add")
    .send({ username: "frodo", description: "hobbit" })
    .then(() => {
      request(app)
        .delete("/delete/:id")
        .expect({ }, done);
    });
});
