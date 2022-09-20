const {loginController} = require('./loginMockTests')


test("login is defined and is a function", () => {
  expect(loginController).toBeDefined();
  expect(typeof loginController).toEqual("function");
});

test("/add route", () => {
  expect(loginController("frodo",'12345')).toStrictEqual({
    accesstoken: '12345'
  });
});