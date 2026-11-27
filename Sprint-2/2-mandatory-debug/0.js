// Predict and explain first...

The result may be undefined.// =============> write your prediction here

/*
function multiply(a, b) {
  console.log(a * b);
} */

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

The multiply result can not be stored because of console.log. so, it shows undefined.// =============> write your explanation here

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a,b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
