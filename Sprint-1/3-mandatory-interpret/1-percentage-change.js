let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 4 function calls in this file. The lines where function calls are made are:
// Line 3: carPrice.replaceAll(",", "")
// Line 4: priceAfterOneYear.replaceAll("," "")
// Line 6: Number(carPrice.replaceAll(",", ""))
// Line 7: Number(priceAfterOneYear.replaceAll("," "")) 

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error is occurring on line 4: priceAfterOneYear.replaceAll("," ""). The error is due to a missing comma between the two arguments in the replaceAll function. It should be priceAfterOneYear.replaceAll(",", "") instead of priceAfterOneYear.replaceAll("," ""). To fix this problem, add the missing comma.

// c) Identify all the lines that are variable reassignment statements
// The lines that are variable reassignment statements are:
// Line 3: carPrice = Number(carPrice.replaceAll(",", ""));
// Line 4: priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

// d) Identify all the lines that are variable declarations
// The lines that are variable declarations are:
// Line 1: let carPrice = "10,000";
// Line 2: let priceAfterOneYear = "8,543";
// Line 5: const priceDifference = carPrice - priceAfterOneYear;
// Line 6: const percentageChange = (priceDifference / carPrice) * 100;
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
