let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// ANSWER: There is 4 function calls.
// 1. Line 4: (carPrice.replaceAll(",", "")); 
// 2. Line 5: (priceAfterOneYear.replaceAll("," ,"")); 
// 3. Line 8: (priceDifference / carPrice)
// 4. Line 10: console.log(`The percentage change is ${percentageChange}`);


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// ANSWER: There is a syntax error on line 5 because there is no comma after ‘,’, so it should be replaceAll(",", "").

// c) Identify all the lines that are variable reassignment statements
//ANSWER: There are 2 variable reassignment statements.
// 1. Line 4: carPrice = Number(carPrice.replaceAll(",", ""));
// 2. Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

// d) Identify all the lines that are variable declarations
//ANSWER: There are 4 variable declarations.
// 1. Line 1: let carPrice = "10,000";
// 2. Line 2: let priceAfterOneYear = "8,543";
// 3. Line 7: const priceDifference = carPrice - priceAfterOneYear;
// 4. Line 9: const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//ANSWER: The part carPrice.replaceAll(",","") removes all commas by replacing then with an empty string "" that the result is "10000", a string without commas. 
// The Number() function then converts this string "10000" into the number 10000. The purpose is to turn string into a number to perform math operations.