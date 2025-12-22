// Predict and explain first...

// =============> not return value so is undefined

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

/* =============> Problem: The function is printing the result, but not returning it.
In template strings, you need the function to return a value (return) for it to appear there.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

