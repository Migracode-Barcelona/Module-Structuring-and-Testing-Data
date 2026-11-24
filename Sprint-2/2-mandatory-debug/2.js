// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
 this code returns the last digit of 103; the variable num.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here

// This code returns always 3, which is the last digit of 103.

// Explain why the output is the way it is
// =============> write your explanation here

// We forgot to add a parameter to the function.

// Finally, correct the code to fix the problem
// =============> write your new code here
// We forgot to add a parameter to the function.

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

function getLastDigit(num) {