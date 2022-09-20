const weather = require("../routes/weather");
const { weatherController} = require('./weatherMockTests')




test("weather is defined and is a function", () => {
  expect(weather).toBeDefined();
  expect(typeof weather).toEqual("function");
});

test("weather is defined and is a function", () => {
  expect(weatherController).toBeDefined();
  expect(typeof weatherController).toEqual("function");
});

test("/weather gives back a number between 90 and -90", () => {
  expect(weatherController('london')).toBe(true)
})