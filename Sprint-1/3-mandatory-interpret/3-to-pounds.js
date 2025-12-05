const penceString = "399p";
//    Initialize a string variable with the value "399p"

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
//Remove the trailing "p" from the string to get just the number part, e.g. "399"
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//    Ensure the string has at least 3 characters by adding leading zeros if needed, e.g. "399" stays "399", "5" becomes "005"

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
//    Take all but the last two characters to get the pounds part, e.g. "3" from "399"

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
//    Take the last two characters for the pence part. If less than 2 characters, add a zero at the end, e.g. "99" from "399"

console.log(`£${pounds}.${pence}`);
//    Combine pounds and pence into a formatted string and print, e.g. "£3.99"

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
