let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//Answer: There are 5 function calls in this file. 
// Line 1: carPrice.replaceAll(",", "")
// Line 2: priceAfterOneYear.replaceAll(",", "")

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//Answer: The error is occurring on line 2 because there is a missing comma in the replaceAll method.

// c) Identify all the lines that are variable reassignment statements
//Ansswer: The variable reassignment statements are on line 1 and line 2.

// d) Identify all the lines that are variable declarations
//Answer: The variable declarations are on line 1, line 2,line 7, and line 8.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//Ansswer: it removes the comma from the price and convert the result from string to number,so that they can perform mathematical calculation.