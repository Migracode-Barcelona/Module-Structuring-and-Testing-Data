const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:

// Case 3: Identify Negative Fractions:

// Case 4: Identify Equal Numerator and Denominator:

/*ANSWER*/
const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for improper fractions", () => {
  expect(isProperFraction(3, 2)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("should handle negative fractions correctly", () => {
  expect(isProperFraction(-2, -3)).toEqual(false); 
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);  
});

