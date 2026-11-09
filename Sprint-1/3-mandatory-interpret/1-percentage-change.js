let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

//Answer
// a) Total of 2 functions but called 4 times in total, on line 4 = Number() and replaceAll() and line 5 = Number() and replaceAll().
// b) The error is on line 5 and its occurring because in the replaceAll function call there is no comma between the two "". To fix it is by adding the comma.
// c) Line 4 and 5
// d) Line 1, 2, 7 and 8
// e) The expression describes that anywhere in the value of carPrice that there is comma it will be removed without replacement and then the value which is a string will be converted into a number.