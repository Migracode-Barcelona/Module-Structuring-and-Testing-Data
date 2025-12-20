const countChar = require("./count");

// Scenario: Multiple Occurrences
test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// Scenario: No Occurrences
test("should return 0 if character does not exist in string", () => {
  const str = "hello";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Single Occurrence
test("should count a single occurrence of a character", () => {
  const str = "hello";
  const char = "e";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

// Scenario: Case-sensitive check
test("should be case-sensitive", () => {
  const str = "aAaA";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});
