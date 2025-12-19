let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below


// a) How many function calls are there in this file? Write down all the lines where a function call is made
		// Line 4: carPrice.replaceAll()
		// Line 4: Number()
		// Line 5: priceAfterOneYear.replaceAll()
		// Line 5: Number()
		// Line 10: console.log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// In the Line 5 missing a comma between the two quotes: ("," "").

// c) Identify all the lines that are variable reassignment statements
// Reassignments The line 4 = carPrice and the line 5 = priceAfterOneYear

// d) Identify all the lines that are variable declarations
// Declarations The lines starting with let and const.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Meaning It removes the comma and turns the text into a number so the computer can do math with it.
