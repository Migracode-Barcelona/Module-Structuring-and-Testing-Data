const isValidPassword = require("./password-validator");

test("should return true for a valid password", () => {
  const password = "Abc1!";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});

test("should return false when password has fewer than 5 characters", () => {
  expect(isValidPassword("Ab1!")).toEqual(false);
});

test("should return false when password has no uppercase letter", () => {
  expect(isValidPassword("abcde1!")).toEqual(false);
});

test("should return false when password has no lowercase letter", () => {
  expect(isValidPassword("ABCDE1!")).toEqual(false);
});

test("should return false when password has no number", () => {
  expect(isValidPassword("Abcde!")).toEqual(false);
});

test("should return false when password has no special character", () => {
  expect(isValidPassword("Abcde1")).toEqual(false);
});

test("should return false when password was used before", () => {
  const password = "Abc1!";
  const passwords = ["Abc1!", "Hello2#"];

  expect(isValidPassword(password, passwords)).toEqual(false);
});

test("should return true when password is not in previous passwords", () => {
  const password = "NewPass1!";
  const passwords = ["Abc1!", "Hello2#"];

  expect(isValidPassword(password, passwords)).toEqual(true);
});
