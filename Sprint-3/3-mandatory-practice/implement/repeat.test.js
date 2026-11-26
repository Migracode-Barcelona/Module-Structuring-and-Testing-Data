const repeat = require("./repeat");

// Case 1: Repeat string 3 times
test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;

  const repeatedStr = repeat(str, count);

  expect(repeatedStr).toEqual("hellohellohello");
});

// Case 2: Count is 1
test("should return the original string when count is 1", () => {
  const str = "hello";
  const count = 1;

  expect(repeat(str, count)).toEqual("hello");
});

// Case 3: Count is 0
test("should return an empty string when count is 0", () => {
  const str = "hello";
  const count = 0;

  expect(repeat(str, count)).toEqual("");
});

// Case 4: Negative count
test("should throw an error when count is negative", () => {
  expect(() => repeat("hello", -1)).toThrow("Count cannot be negative.");
});
