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
// 1. const penceString = "399p": initializes a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): removes the trailing 'p' from the string to isolate the numeric value
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): ensures that the numeric value has at least three digits by padding with leading zeros if necessary
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): extracts the pounds portion of the value by taking all but the last two digits
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): extracts the pence portion of the value by taking the last two digits and ensures it has two digits by padding with trailing zeros if necessary
// 6. console.log(`£${pounds}.${pence}`): outputs the final formatted string representing the price in pounds and pence to the console, prefixed with the pound symbol (£)      

