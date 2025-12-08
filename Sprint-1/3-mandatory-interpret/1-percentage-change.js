let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);



// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?


// (a) There are 5 function calls in this file.
// The function calls are on these lines:
// 1. carPrice.replaceAll(",", "")
// 2. Number(carPrice.replaceAll(",", ""))
// 3. priceAfterOneYear.replaceAll(",", "")
// 4. Number(priceAfterOneYear.replaceAll(",", ""))
// 5. console.log(...)

// (b) The error happens when the code tries to convert "10,000;" into a number.
// The string contains a semicolon, so Number("10000;") is not valid.
// To solve this: we remove the semicolon → let carPrice = "10,000";

// (c) Reassignment happens on two lines:
// carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// (d) Variable declarations are on these lines:
// let carPrice = "10,000";
// let priceAfterOneYear = "8,543";
// const priceDifference = carPrice - priceAfterOneYear;
// const percentageChange = (priceDifference / carPrice) * 100;

// (e) Number(carPrice.replaceAll(",", "")) does two things:
// 1. replaceAll(",", "") removes all commas from the string - "10000"
// 2. Number("10000") converts the string into a real number.
// Purpose: to turn a formatted price string into a numeric value JavaScript can calculate with.

