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


console.log(pence)

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initializes a string variable with the value "399p"

// 2. Removes the last character ("p") by taking a substring from index 0 to length-1.

// 3. Ensures the string has at least 3 digits (e.g., "5" becomes "005")
// to safely split pounds and pence.

// 4. Extracts the pounds by taking everything except the last two digits.

// 5. Extracts the last two digits as pence and ensures two-digit formatting.

// 6. Logs the pence value: "99"

// 7. Formats and logs the final result using a template literal: "£3.99"