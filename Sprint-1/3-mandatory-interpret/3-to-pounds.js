const penceString = "399p";

/* const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
); */

const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1); // '399'

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); // '399'
/* const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
); */

const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2); // (0,1), 3

/* const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0"); */

const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"); // 399.substring(3-2).padEnd(2,"0"), 99

console.log(`£${pounds}.${pence}`); // £3.99

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"


/* Answer
1. const penceString = "8678p";
2. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length-1) // (0,4), 8678
3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3,"0"); // 8678
4. const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length -2); // 8678(0,2), 86
5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length -2).padEnd(2,"0"); // 8678.substraing(4-2).padEnd(2,"0"), 78
6. console.log(`£${pounds}.${pence}`); // £86.78 
*/