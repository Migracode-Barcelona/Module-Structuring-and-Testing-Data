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

//Answer:
1. const penceString = "399p" — Initialises a string variable with the value "399p".
2. penceStringWithoutTrailingP — Uses substring() to remove the final "p", leaving "399".
3. paddedPenceNumberString — Uses padStart() to make sure the number has at least three characters by adding zeros to the beginning if necessary.
4. pounds — Uses substring() to take everything except the final two digits, giving the pounds part ("3").
5. pence — Uses substring() to take the final two digits and padEnd() to make sure there are always two pence digits.
6. console.log() — Combines the pound and pence values with £ and . to produce the final price: £3.99.