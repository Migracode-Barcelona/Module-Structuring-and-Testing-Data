const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions: 
test("should return false for an improper fraction", () => {
  expect(isProperFraction(5, 4)).toEqual(false);
}); 



// Case 3: Identify Negative Fractions:
test("should return false for a negative fraction", () => {
  expect(isProperFraction(-2, 3)).toEqual(true);
});


// Case 4: Identify Equal Numerator and Denominator:
test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(4, 4)).toEqual(false);
});
