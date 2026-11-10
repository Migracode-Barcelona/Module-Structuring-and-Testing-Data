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
// 2. Lines 3-6 create penceStringWithoutTrailingP. substring starts at index 0
//    and stops before index penceString.length - 1. "399p" has length 4,
//    so substring(0, 3) keeps "399" and removes the final "p".
// 3. Line 8 creates paddedPenceNumberString. padStart(3, "0") adds zeroes
//    to the left until the string has at least three characters.
//    "399" stays "399"; "5" becomes "005" and "50" becomes "050".
//    This ensures an amount below one pound has a pounds digit of "0".
// 4. Lines 9-12 create pounds from everything before the final two digits.
//    With "399", substring(0, 1) gives "3". There are 100 pence in a pound,
//    so the final two digits are reserved for the pence part.
// 5. Line 14 begins the declaration of pence using paddedPenceNumberString.
//    Line 15 takes the substring starting two positions before the end.
//    With "399", substring(1) gives "99". With "005", it gives "05".
// 6. Line 16 calls padEnd(2, "0") on that substring. This would add zeroes
//    on the right if it had fewer than two characters. Here it changes nothing:
//    padStart and substring already guarantee two pence digits for valid input.
// 7. Line 18 inserts pounds and pence into a template literal, with the pound
//    sign and a decimal point, then console.log prints "£3.99".
// This program formats text; it never converts the price to a number.
// It assumes the input contains nonnegative whole pence followed by "p".
// It removes the last character without checking that it actually is "p".
// Documentation:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
