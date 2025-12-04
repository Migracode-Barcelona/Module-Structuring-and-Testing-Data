const penceString = "399p";
    //this declares the a constant variable and sets its value with a string

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
    //it uses the .substring(start,end) to take characters startingg from inndex 0 up to(but not including) penceString.length -1. it drops the last character "p". this will inturn return just numeric values.

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
    //this calls padStart(3, "0") on the numeric string to ensure it has at least 3 characters, padding on the left with "0" if needed.
    // The code later splits the string into pounds and pence by taking the last two characters as pence and the rest as pounds. Ensuring at least 3 characters means the split works for small values (e.g. "5p" → "005" so we get "0" pounds and "05" pence).  
    // For "399": It already has 3 chars, so no change. #chatgpt
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
    // this is just like line 4. it takes the substring from index 0 to the character two from the end. That is, everything except the last two characters.
    // this is because the convention is last two digits  are classified  as pence and the rest becomes the pounds. So this extracts the pounds part.

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
    // the .substring fuction returns the last two characters (from index length-2 to end) which would be 99.
    //the .pad function makes sure the resulting pence string is exactly 2 characters. It will add padding on the right with "0" if necessary. this makes sure that the outcome will always two-digits and protects against odd cases.

console.log(`£${pounds}.${pence}`);
    // this prints in the console the string with the results of pounds and pence.


// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
