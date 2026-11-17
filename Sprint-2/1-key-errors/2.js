// Prediction:
// SyntaxError will occur because we cannot use a number (3) as a function parameter.

// Error message:
// SyntaxError: Unexpected number

// Explanation:
// Function parameters must be variable names, not actual values.
// Also, num is not defined.

// New code:

function square(num) {
  return num * num;
}

console.log(square(3)); // 9
