/*let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
/* carPrice.replaceAll(",", "")  línea 4
Number(carPrice.replaceAll(",", ""))  línea 4
priceAfterOneYear.replaceAll("," "")  línea 5
Number(priceAfterOneYear.replaceAll("," ""))  línea 5
console.log(...)  línea 9
Total> 5 calls

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

is missing coma
console.log(...)  in line 9

// c) Identify all the lines that are variable reassignment statements
carPrice = Number(carPrice.replaceAll(",", "")); in line 4
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", "")); in line 5

// d) Identify all the lines that are variable declarations

let carPrice = "10,000";  línea 1
let priceAfterOneYear = "8,543";  línea 2
const priceDifference = carPrice - priceAfterOneYear;  línea 6
const percentageChange = (priceDifference / carPrice) * 100;  línea 7

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
become a price that is string with comas fixed ready to run and show the %
*/
