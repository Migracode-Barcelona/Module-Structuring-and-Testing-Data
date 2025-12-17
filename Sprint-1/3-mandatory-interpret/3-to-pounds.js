const penceString = "399p"; // declare a constant called penceString and assigns it a string with the value "399p"

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);  // Use substring to extract part of the text. Start at position 0, end just before the last character (length - 1) and remove the final ‘p’

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); //Assure that the string has at least 3 characters. If it has less, add zeros at the beginning
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
); // Extract all characters except the last two to represent pounds

const pence = paddedPenceNumberString 
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0"); //Extract the last two characters, which represent the pence to make sure there are always two digits

console.log(`£${pounds}.${pence}`); //Use template strings to construct the final price and print the value in pounds.pence format

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// Answer: in each line 