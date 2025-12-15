// Predict and explain first...
//  =============> write your prediction here
// I predict that the output will be "The sum of 10 and 32 is undefined"
// because the function has a `return` statement with no value before the expression `a + b`.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The function returns immediately at the `return;` statement without a value.
// The next line `a + b` is never executed. Therefore, the function returns undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`); // "42"
