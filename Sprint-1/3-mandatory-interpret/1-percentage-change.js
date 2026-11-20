let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
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

/* Answer 
 a) carPrice.replaceAll(",", "") is the 1st function and Number() is the 2nd function in line 4. 
priceAfterOneYear.replaceAll(",", "") is the 3rd function and Number () is the 4th function in line 6.
console.log() is the 5th function to print. 

b) In line 5, it is needed to add "," into priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

c) Line 4 and 6 are variable reassignment statements. 

d) Line 1, 2, 8 and 9 are variable declarations.

e) The expression Number(carPrice.replaceAll(",","")) means .replaceAll(",","") makes the "10,000" to "10000", replace all text but remove , and add nothing. 
Then,  Number() chnages the string "10000" into the number 10000. The purpose is to calculate the numbers. String can't be calculated.
*/
