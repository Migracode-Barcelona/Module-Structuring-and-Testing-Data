const penceString = "18399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
console.log(penceStringWithoutTrailingP);
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
console.log(pounds);


const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
console.log(pence);

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
//    - This line removes the trailing 'p' from the pence string to isolate the numeric part
//    - It uses the substring method to extract all characters from the start of the string up to (but not including) the last character
// 3. console.log(penceStringWithoutTrailingP): logs the modified pence string without the trailing 'p' to the console for verification
// 4. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//    - This line ensures that the numeric string has at least three characters by padding it with leading zeros if necessary
//    - This is important for correctly separating pounds and pence later on
// 5. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
//    - This line extracts the pounds part of the price by taking all characters except for the last two (which represent pence)
// 6. console.log(pounds): logs the extracted pounds value to the console for verification
// 7. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
//    - This line extracts the pence part of the price by taking the last two characters of the padded string
//    - It also ensures that there are always two digits for pence by padding with a trailing zero if necessary
// 8. console.log(pence): logs the extracted pence value to the console for verification
// 9. console.log(`£${pounds}.${pence}`);
//    - Finally, this line constructs and logs the final price in pounds and pence format, prefixed with the pound symbol (£)
