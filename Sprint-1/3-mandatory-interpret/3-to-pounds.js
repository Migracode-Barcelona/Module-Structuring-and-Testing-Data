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
/* 1. const penceString = "399p": initialises a string variable with the value "399p"

3-6. const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
); : Applies the function .substring() to the penceString variable to extract all but the last character of the string 
(removes the p at the end) and stores the result in the variable penceStringWithoutTrailingP.

8-12. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
); : In line 6, .padStart(3, "0") is supposed to add the specified value ("0") to the left of our string
so it will be 3 digits long, but as it already is 3 digits long, I think is having no effect on our string;
then from line 9 onwards, the function .subString(0, paddedPenceNumberString.length - 2) is returning
the digits from 0 to -2(0), of the string, meaning only digit 0(3) is returned and stored into the variable pounds.

14-16. const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0"); : .paddedPenceNumberString.substring(paddedPenceNumberString.length - 2) is
  returning the characters of the string from position -2 onwards(3->99) and stores it into the variable pence.
  In theory, .padEnd(2, "0") also gets applied to the value, but as the selected string is already 2 digits
  long, it has no effect.

  18. console.log(`£${pounds}.${pence}`); : This line is logging a concatenated string including the 
  character '£', the value of the variable pounds, a point(.), 
  and the value of the variable pence, meaning "£3,99".*/