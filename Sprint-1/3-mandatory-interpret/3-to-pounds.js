const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

//Answer
//const penceString = "399p"; stores the price as text.
//penceString.substring(0, penceString.length - 1) removes the final "p", leaving "399".
//padStart(3, "0") makes sure the number has at least three characters by adding zeros to the front if needed. Here, "399" stays the same.
//The next substring takes all but the last two characters, giving "3" for the pounds.
//The final substring takes the last two characters, giving "99" for the pence. .padEnd(2, "0") adds a zero at the end if there are fewer than two characters.
//console.log() combines the pounds and pence and prints £3.99.
