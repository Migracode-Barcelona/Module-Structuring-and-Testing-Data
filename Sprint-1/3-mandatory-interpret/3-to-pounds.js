/*const penceString = "399p";

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
/* 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
Use .substring(start, end) to remove the last character (p) from the string.
penceString.length - 1  index of the last character excluding p
3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
Use .padStart(targetLength, "0") to ensure the chain has at least 3
4. `const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);`

`Extracts the digits from the pounds.` `paddedPenceNumberString.length - 2` → leaves the last two digits for the pence.`
5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");

.substring(start)  takes the last two characters, which represent the penny

.padEnd(2, "0")  ensures there are always two digits, padding with 0 if necessary
6. console.log(£${pounds}.${pence});

Builds a string in the standard price format: £pounds.pence

