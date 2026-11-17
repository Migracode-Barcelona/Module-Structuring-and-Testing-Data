// Predict and explain first...

// The output will show undefined

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

// Finally, correct the code to fix the problem
// Explanation:
// console.log() only prints the result. The function returns undefined by default. So the template literal will show undefined.

// New code:

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
