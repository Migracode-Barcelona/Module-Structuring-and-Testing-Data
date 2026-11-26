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
test("password has at least 5 characters", () => {
    // Arrange
    const password = "12345";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
}
);

//Answer:

const isValidPassword = require("./password-validator");

test("password should be valid when it meets all requirements", () => {
    const password = "Hello1!";
    const result = isValidPassword(password);
    expect(result).toEqual(true);
});

test("password should be invalid if it has fewer than 5 characters", () => {
    expect(isValidPassword("Hi1!")).toEqual(false);
});

test("password should be invalid without an uppercase letter", () => {
    expect(isValidPassword("hello1!")).toEqual(false);
});

test("password should be invalid without a lowercase letter", () => {
    expect(isValidPassword("HELLO1!")).toEqual(false);
});

test("password should be invalid without a number", () => {
    expect(isValidPassword("Hello!")).toEqual(false);
});

test("password should be invalid without a special character", () => {
    expect(isValidPassword("Hello12")).toEqual(false);
});
