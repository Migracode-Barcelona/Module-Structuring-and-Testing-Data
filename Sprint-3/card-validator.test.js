const validateCreditCard = require("./card-validator");

test("valid credit card 9999777788880000", () => {
  expect(validateCreditCard("9999777788880000")).toBe(true);
});

test("invalid: all same digits", () => {
  expect(validateCreditCard("4444444444444444")).toBe(false);
});

test("invalid: last digit odd", () => {
  expect(validateCreditCard("6666666666666661")).toBe(false);
});

test("invalid: sum < 16", () => {
  expect(validateCreditCard("1111111111111110")).toBe(false);
});

test("invalid: contains non-numbers", () => {
  expect(validateCreditCard("a92332119c011112")).toBe(false);
});
