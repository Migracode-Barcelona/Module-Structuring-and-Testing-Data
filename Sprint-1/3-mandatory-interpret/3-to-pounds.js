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
        const penceString = "399p"; //Initializes a string variable containing the price in pence, where the last character (p) indicates the unit.

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): removes the trailing 'p' from the string
        const penceStringWithoutTrailingP = penceString.substring(
          0,
          penceString.length - 1
        ); //Removes the trailing 'p' character from the string to isolate the numeric value representing the amount in pence.

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): ensures the string has at least 3 characters by padding with leading zeros if necessary
        const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); //Ensures that the numeric string has at least three characters by adding leading zeros if necessary. This is important for correctly separating pounds and pence later on.

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): extracts the pounds part of the string
        const pounds = paddedPenceNumberString.substring(
          0,
          paddedPenceNumberString.length - 2
        ); //Extracts the pounds portion of the string by taking all characters except the last two, which represent the pence.

// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): extracts the pence part and ensures it has two digits
        const pence = paddedPenceNumberString
          .substring(paddedPenceNumberString.length - 2)
          .padEnd(2, "0"); //Extracts the last two characters of the string to represent the pence portion. It also ensures that this portion has exactly two digits by padding with trailing zeros if necessary.

// 6. console.log(`£${pounds}.${pence}`): outputs the final formatted price in pounds and pence
        console.log(`£${pounds}.${pence}`); //Outputs the final formatted price in pounds and pence to the console, using the £ symbol followed by the pounds and pence separated by a decimal point. 


   

