// Predict and explain first...

// =============> write your prediction here

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
the multiplication is undefined because the function multiply does not return any value. It only logs the result to the console, but does not return it. Therefore, when we try to use the result of multiply(10, 32) in the template literal, it will be undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);  
