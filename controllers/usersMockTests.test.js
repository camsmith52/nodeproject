const {
  addController,
  deleteController,
  editController,
  patchController,
} = require("./usersMockTests");

jest.setTimeout(30000);

// /add route tests
test("/add is defined and is a function", () => {
  expect(addController).toBeDefined();
  expect(typeof addController).toEqual("function");
});

test("/add route", () => {
  expect(addController("frodo", "hobbit")).toStrictEqual({
    username: "frodo",
    description: "hobbit",
  });
});

// /edit/id tests
test("/edit/:id is defined and is a function", () => {
  expect(editController).toBeDefined();
  expect(typeof editController).toEqual("function");
});

test("/edit/:id route", () => {
  expect(editController(1, "smaug", "dragon")).toStrictEqual({
    username: "smaug",
    description: "dragon",
  });
});

// /patch/id tests

test("/patch/:id route", () => {
  expect(patchController(1, "smaug", "dwarf")).toStrictEqual({
    username: "smaug",
    newDescription: "dwarf",
  });
});

test("/patch/:id is defined and is a function", () => {
  expect(patchController).toBeDefined();
  expect(typeof patchController).toEqual("function");
});

// /delete/id tests

test("/delete/:id route", () => {
  expect(deleteController(1)).toBe(null);
});

test("/delete/:id is defined and is a function", () => {
  expect(deleteController).toBeDefined();
  expect(typeof deleteController).toEqual("function");
});




// const users = require("../routes/users");

// const request = require("supertest");
// const express = require("express");
// const app = express();
// const router = express.Router();
// app.use("/", users);
// app.use(router);
// app.use(express.json());

// app.use(express.urlencoded({ extended: false }));

// test("testing post route", (done) => {
//   request(app)
//     .post("/add")
//     .send({username:"frodo", description: "hobbit"})
//     .then(() => {
//       request(app)
//         .get("/")
//         .expect({username:"frodo", description: "hobbit"}, done);
//     });
// });

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

// test("testing delete route", (done) => {
//   request(app)
//     .post("/add")
//     .send({ username: "frodo", description: "hobbit" })
//     .then(() => {
//       request(app)
//         .delete("/delete/:id")
//         .expect({ }, done);
//     });
// });
