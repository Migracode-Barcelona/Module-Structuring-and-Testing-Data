// Implement a function isProperFraction
// Write assertions for your function to check it works in different cases

function isProperFraction(numerator, denominator) {
  if (Math.abs(numerator) < denominator) return true;
  else return false;
}

// here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Acceptance criteria:

// Proper Fraction check:
const properFraction = isProperFraction(2, 3);
assertEquals(properFraction, true);

// Improper Fraction check:
const improperFraction = isProperFraction(5, 2);
assertEquals(improperFraction, false);

// Negative Fraction check:
const negativeFraction = isProperFraction(-4, 7);
assertEquals(negativeFraction, true);

// Equal Numerator and Denominator check:
const equalFraction = isProperFraction(3, 3);
assertEquals(equalFraction, false);

// Stretch:
// Zero numerator check:
const zeroFraction = isProperFraction(0, 5);
assertEquals(zeroFraction, true);

// Negative numerator and denominator check:
const negativeBoth = isProperFraction(-2, -5);
assertEquals(negativeBoth, false);
