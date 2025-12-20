const passwordValidator = require("./password-validator");

// Test: minimum length
test("password has at least 5 characters", () => {
  expect(passwordValidator("12345")).toBe(false); // no letters, no special char
  expect(passwordValidator("Ab1!2")).toBe(true);
  expect(passwordValidator("Ab1!")).toBe(false);
});

// Test: at least one uppercase letter
test("password has at least one uppercase letter", () => {
  expect(passwordValidator("abcdef1!")).toBe(false);
  expect(passwordValidator("Abcdef1!")).toBe(true);
});

// Test: at least one lowercase letter
test("password has at least one lowercase letter", () => {
  expect(passwordValidator("ABCDEF1!")).toBe(false);
  expect(passwordValidator("ABCDEf1!")).toBe(true);
});

// Test: at least one number
test("password has at least one number", () => {
  expect(passwordValidator("Abcdef!")).toBe(false);
  expect(passwordValidator("Abcde1!")).toBe(true);
});

// Test: at least one special character
test("password has at least one special character (!, #, $, %, ., *, &)", () => {
  expect(passwordValidator("Abcde12")).toBe(false);
  expect(passwordValidator("Abcde1!")).toBe(true);
});
