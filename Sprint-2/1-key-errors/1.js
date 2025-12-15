// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// I predict there will be a SyntaxError or ReferenceError because
// the variable `decimalNumber` is declared twice: once as a parameter
// and once with `const` inside the function.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// The error occurs because we are trying to declare a new constant `decimalNumber`
// inside the function that has the same name as the function parameter.
// In addition, `console.log(decimalNumber)` is outside the function scope,
// so decimalNumber is not defined there.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  // Remove redeclaration, use the parameter directly
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

// Example usage:
console.log(convertToPercentage(0.5)); // "50%"
