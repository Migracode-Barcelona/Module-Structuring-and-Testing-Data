let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Ans: 5

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// ans: add (,) in line 5
// c) Identify all the lines that are variable reassignment statements
// ans: line 4,5
// d) Identify all the lines that are variable declarations
// ans: line 1,2,7,8
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// ans:
// It removes the comma from "10,000" and converts the text into a real number.
// purpose: To change a text string into a number so we can use it in math equations.
