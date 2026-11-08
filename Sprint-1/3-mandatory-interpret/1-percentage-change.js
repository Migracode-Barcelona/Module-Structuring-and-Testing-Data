let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are four function calls in the file, they're in lines 4 and 5, both using the same type of function.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error is occurring in line 5, and can be solved by adding a ',' to separate the inputs in the function.

// c) Identify all the lines that are variable reassignment statements
// The lines are 4 and 5.

// d) Identify all the lines that are variable declarations
// These lines are 1, 2, 7, and 8.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// It is eliminating the ',' in the string, and then, turning it into a number.
