let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

// created a function that can e reused to get the initials
function firstAlphabets() {
  const result = firstName.charAt(0) + middleName.charAt(0) + lastName.charAt(0);
  return result;
}
const initials = firstAlphabets();
console.log(initials);

// https://www.google.com/search?q=get+first+character+of+string+mdn

