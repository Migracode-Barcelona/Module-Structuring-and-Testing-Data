// Predict and explain first...

// Why will an error occur when this program runs?
decimalNumber variable is inside the main function, so it's not working well.// =============> write your prediction here

// Try playing computer with the example to work out what is going on
/*
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber); */

While I run this, show uncaught SyntaxError.// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here


function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
const decimalNumber = 0.5;
console.log(convertToPercentage(decimalNumber));