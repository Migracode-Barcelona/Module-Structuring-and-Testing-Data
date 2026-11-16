// Predict and explain first...
//  =============> write your prediction here
  // The sum of 10 and 32 will be undefined

//function sum(a, b) {
  //return;
// a + b; }

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
  // The value of return must be on the same line as return statement. The function sum has a return with nothing after it, so it returns undefined. 

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);