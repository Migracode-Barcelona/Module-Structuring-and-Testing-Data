// Predict and explain first...

// Predict the output of the following code:
Function is ok, but num variable is already declared before the function and the function has no parameter.
So, in the function num refers to the num variable outside of the function and return `3` everytime, 
whatever later input (42,105,806).
// =============> Write your prediction here

/*
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}  */

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
The last digits of 42, 105, 806 are 3// =============> write the output here

// Explain why the output is the way it is
Function is ok, but num variable is already declared before the function and the function has no parameter.
So, in the function num refers to the num variable outside of the function and return `3` everytime, 
whatever later input (42,105,806).// =============> write your explanation here

// Finally, correct the code to fix the problem

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`); // =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
