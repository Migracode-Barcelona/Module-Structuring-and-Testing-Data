const repeat = require("./repeat"); // импортируем правильно

// Scenario: Repeat String
test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});

// Scenario: Handle count of 1
test("should return the original string if count is 1", () => {
  const str = "hello";
  const count = 1;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("hello");
});

// Scenario: Handle count of 0
test("should return an empty string if count is 0", () => {
  const str = "hello";
  const count = 0;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("");
});

// Scenario: Negative count
test("should throw an error if count is negative", () => {
  const str = "hello";
  const count = -2;
  expect(() => repeat(str, count)).toThrow("Invalid count");
});
