// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// I predict that all three console.log statements will return "3"
// because the function getLastDigit always uses the constant num = 103
// and ignores any arguments passed to it.

// Original code
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The output is:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// =============> write your explanation here
// The function getLastDigit does not accept any parameter,
// so it always uses the global constant num = 103.
// Therefore, no matter what number we try to pass, it always returns '3'.
// The arguments (42, 105, 806) are ignored.

// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`); // 2
console.log(`The last digit of 105 is ${getLastDigit(105)}`); // 5
console.log(`The last digit of 806 is ${getLastDigit(806)}`); // 6
