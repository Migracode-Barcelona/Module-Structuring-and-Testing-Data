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


// 1. const penceString = "399p";
//    Creates a string representing a price in pence. The final "p" indicates pence.

// 2. We remove the trailing "p" so we are left with only the number part of the string.
//    Example: "399p" → "399"

// 3. We pad the number so it has at least 3 digits.
//    This ensures that the last two digits always represent pence.
//    Example: "5" - "005"

// 4. We extract the pounds part by taking all digits except the last two.
//    Example: "399" - "3"

// 5. We extract the pence part by taking only the last two digits.
//    Example: "399" - "99"

// 6. Finally, we log the formatted currency value using £pounds.pence.

