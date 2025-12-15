// Predict and explain first...

// =============> write your prediction here
// I predict that the output will be "The result of multiplying 10 and 32 is undefined"
// because the multiply function does not return a value, it only logs it to the console.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The function multiply prints the product of a and b using console.log,
// but it does not return any value. In JavaScript, if a function does not
// return anything, it implicitly returns undefined. Therefore, when we
// try to use multiply(10, 32) inside the template literal, it inserts undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`); // 320
