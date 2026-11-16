// Predict and explain first...

// Why will an error occur when this program runs?
// 'decimalNumber' has been declared in line 8. An error will occur as its declared again in line 9. 

// Try playing computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {
//  const decimalNumber = 0.5;
//  const percentage = `${decimalNumber * 100}%`;

//  return percentage;
//}

// console.log(decimalNumber);

// =============> write your explanation here
  // The code throws a syntax error because decimalNumber is declared twice, as the parameter and again with const. Additionally, the decimalNumber only exists inside the function, so putting it outside the function will cause an error. 

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) { 
  const percentage = `${decimalNumber * 100}%`; 
  return percentage; 
}

console.log(convertToPercentage(0.5));