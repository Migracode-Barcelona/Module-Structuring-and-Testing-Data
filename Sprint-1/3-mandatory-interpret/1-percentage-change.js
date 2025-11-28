let carPrice = "10,000";
let priceAfterOneYear = "8,543";
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 4 function calls in this file. They are on the following lines:
// Line 3: carPrice.replaceAll(",", "")
// Line 3: Number(carPrice.replaceAll(",", ""))
// Line 4: priceAfterOneYear.replaceAll(",", "")
// Line 4: Number(priceAfterOneYear.replaceAll(",", ""))

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The code had an error in replaceAll because it wasn't a comma between the quotation marks.
// c) Identify all the lines that are variable reassignment statements
// The variable reassignment statements are on the following lines:
// Line 3: carPrice = Number(carPrice.replaceAll(",", ""));
// Line 4: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
// d) Identify all the lines that are variable declarations
// The variable declaration statements are on the following lines:
// Line 1: let carPrice = "10,000";
// Line 2: let priceAfterOneYear = "8,543";
// Line 5: const priceDifference = carPrice - priceAfterOneYear;
// Line 6: const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The expression Number(carPrice.replaceAll(",","")) is performing two main tasks:
// 1. carPrice.replaceAll(",","") - This part of the expression is using the replaceAll method to remove all commas from the string value of carPrice. 
// This is necessary because commas are not valid in numerical representations and would cause issues when trying to convert the string to a number.
// 2. Number(...) - The outer Number function takes the resulting string (which now has no commas) and converts it into a numerical value. This allows
//  for mathematical operations to be performed on carPrice, such as subtraction and percentage calculations later in the code.
