// Predict and explain first...
// Prediction:
//  SyntaxError and RefferenceError;

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// 1. The parameter decimalNumber is already declared
//    in the function.
// 2. The variable decimalNumber is only accessible
//    inside the function.

// Finally, correct the code to fix the problem
// new code:

const convertToPercentage = (decimalNumber) => {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
};
console.log(convertToPercentage(0.5));
