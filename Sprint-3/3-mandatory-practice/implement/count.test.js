const countChar = require("./count");

test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";

  const count = countChar(str, char);

  expect(count).toEqual(5);
});

test("should return 0 when character does not exist in string", () => {
  const str = "hello";
  const char = "z";

  const count = countChar(str, char);

  expect(count).toEqual(0);
});
