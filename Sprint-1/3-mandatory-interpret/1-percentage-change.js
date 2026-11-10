let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are five function calls in the program, on three lines:
// Line 4: carPrice.replaceAll(",", "") and Number(...).
// Line 5: priceAfterOneYear.replaceAll(",", "") and Number(...).
// Line 10: console.log(...).
// Each replaceAll call runs first; its return value is passed to Number.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The original line 5 produced: SyntaxError: missing ) after argument list.
// A comma was missing between the two arguments of replaceAll.
// The corrected call is replaceAll(",", ""): find commas and replace them
// with an empty string. The fixed program prints a percentage change of 14.57.
// This represents a 14.57% decrease because the price fell from 10000 to 8543.

// c) Identify all the lines that are variable reassignment statements
// Lines 4 and 5 reassign carPrice and priceAfterOneYear.
// These variables already exist; their string values become number values.

// d) Identify all the lines that are variable declarations
// Lines 1 and 2 declare carPrice and priceAfterOneYear using let.
// Lines 7 and 8 declare priceDifference and percentageChange using const.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// First, replaceAll(",", "") creates "10000" by removing the comma from
// "10,000". Then Number("10000") converts that string to the number 10000.
// This prepares the price for arithmetic. Number("10,000") would give NaN,
// because a comma-separated price is not a valid numeric string for Number.
// Documentation:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number
