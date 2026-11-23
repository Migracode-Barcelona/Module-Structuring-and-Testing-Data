/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
const isValidPassword = require("./password-validator");
test("returns true for a valid password meeting all requirements", () => {
  expect(isValidPassword("Abc1!", ["Old1!"])).toEqual(true);
});

test("returns false if password has fewer than 5 characters", () => {
  expect(isValidPassword("Ab1!")).toEqual(false);
});

test("returns false if password has no uppercase letter", () => {
  expect(isValidPassword("abcd1!")).toEqual(false);
});

test("returns false if password has no lowercase letter", () => {
  expect(isValidPassword("ABCD1!")).toEqual(false);
});

test("returns false if password has no number", () => {
  expect(isValidPassword("Abcde!")).toEqual(false);
});

test("returns false if password has no allowed special symbol", () => {
  expect(isValidPassword("Abcde1")).toEqual(false);
  expect(isValidPassword("Abcde1@")).toEqual(false);
});

test("returns false if password is in the previousPasswords array", () => {
  expect(isValidPassword("Abc1!", ["Abc1!", "Def2#"])).toEqual(false);
});