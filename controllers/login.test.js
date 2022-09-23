const {loginController} = require('./loginMockTests')


test("login is defined and is a function", () => {
  expect(loginController).toBeDefined();
  expect(typeof loginController).toEqual("function");
});

test("/login route", () => {
  expect(loginController("admin")).toStrictEqual([{
    username: "admin",
    title: "admin"
  }]);
});