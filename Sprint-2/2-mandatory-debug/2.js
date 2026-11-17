// Prediction:
//The output will be 3 for all three calls because the function always uses the global variable num (103)

// Predict the output of the following code:

// Output:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explanation:
// The function does not accept any parameters.It always uses the global variable num,

// new code

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
