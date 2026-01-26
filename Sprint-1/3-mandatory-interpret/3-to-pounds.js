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
// 1. const penceString = "399p": initialize a string variable with the value "399p"

// 3. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length -1); 
// cleaning the trailing P character. it uses the string´s length minus 1 as the end index for substring(), this leave only the numeric value while drop the last character.

// 8. const paddedPenceNumberString = penceStringWithoutTrailingP.padStar(3, "0"); Padding- ensure the numeric string is at least three characters long by prepending zeros. 
// this is important for separating pounds from pence especially when values is less than 100p

// 9. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2); Extracting pounds component, this uses substring() 
// to take all character from the start (index 0) up to, but not including the last two characters, they are always pence.

// 14. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"); Extracting and formatting price- 
// Extracts the pence component (the last two digits) and ensures they are always two digits long by padding the end with a zero if needed (though not needed for "99").

// 18. console.log(\£${pounds}.${pence}`);` Output: Format the extracted components into the standard currency display £3.99. 