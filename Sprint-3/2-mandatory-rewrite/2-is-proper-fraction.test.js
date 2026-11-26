const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:

// Case 3: Identify Negative Fractions:

// Case 4: Identify Equal Numerator and Denominator:

//Answer:
const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

test("should return false for an improper fraction", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});

test("should return true for a negative fraction", () => {
  expect(isProperFraction(-4, 7)).toEqual(true);
});

test("should return false when numerator and denominator are equal", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});