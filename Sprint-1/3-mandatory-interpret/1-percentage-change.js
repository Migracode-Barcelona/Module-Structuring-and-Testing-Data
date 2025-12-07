let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
/* There are 5 function calls in this file. They are on the following lines:
Line 1: replaceAll
Line 2: replaceAll
Line 7: console.log */    

then 

carPrice.replaceAll(",", "")

Number(carPrice.replaceAll(",", ""))

priceAfterOneYear.replaceAll(",", "")

Number(priceAfterOneYear.replaceAll(",", ""))

console.log(...)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
/* The error is occurring on line 3:
 priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
The error is due to a missing comma between the quotation marks in the replaceAll function.
 To fix this problem, we need to add a comma between the quotation marks like this:
 priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
After fixing, the line should look like this:
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", "")); */

// c) Identify all the lines that are variable reassignment statements
/* The variable reassignment statements are on the following lines:
Line 3: carPrice = Number(carPrice.replaceAll(",", ""));
Line 4: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
Line 7: console.log(`The percentage change is ${percentageChange}`);*/

// d) Identify all the lines that are variable declarations
/*The variable declaration statements are on the following lines:
Line 1: let carPrice = "10,000";
 Line 2: let priceAfterOneYear = "8,543";
 Line 5: const priceDifference = carPrice - priceAfterOneYear;
 Line 6: const percentageChange = (priceDifference / carPrice) * 100;*/
 
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/* The expression Number(carPrice.replaceAll(",","")) is performing two operations:
1. carPrice.replaceAll(",",""): This part of the expression is calling the replaceAll method on the carPrice string. It replaces all occurrences of the comma character (",") with an empty string (""), effectively removing all commas from the string representation of the car price.
2. Number(...): The outer Number function takes the resulting string from the replaceAll method and converts it into a numeric value. This is important because mathematical operations cannot be performed directly on strings.

The purpose of this expression is to convert a formatted string representation of a number (which may include commas as thousand separators) into a numeric value that can be used for calculations. In this case, it allows us to work with the car price as a number rather than a string.*/      
    
