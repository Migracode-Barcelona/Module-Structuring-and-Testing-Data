let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below


// a) How many function calls are there in this file? Write down all the 
// there are 5 after fixing line 5
// // b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
after adding the comma,there are now 5 function calls.
// c) Identify all the lines that are variable reassignment statements
new values have been assisgned and already declared variables have been reassigned on lines 4 and 5.

// d) Identify all the lines that are variable declarations
lest and const
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
It removes commas from carPrice and converts the string to a number so that it can be used in the calculations.