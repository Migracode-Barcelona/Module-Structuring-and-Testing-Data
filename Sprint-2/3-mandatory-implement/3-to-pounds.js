// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for
function toPounds(penceString) {
  const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
  );
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds= paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
return `£${pounds}.${paddedPenceNumberString.substring(
  paddedPenceNumberString.length - 2
)}`;
}
console.log(toPounds("399p")); // should return "£3.99"                     