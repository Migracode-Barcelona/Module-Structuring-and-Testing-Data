// Predict and explain first...
//  =============> write your prediction here
//  The function will not work. The return statement is wrong.
// function sum(a, b) {
//   return;
//   a + b;
// }

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// Finally, correct the code to fix the problem
//  =============> write your new code here

// We need to remove the extra ";" from line 5.
// Finally, correct the code to fix the problem

function sum(a, b) {
  return;
  a + b;
  return a + b;
