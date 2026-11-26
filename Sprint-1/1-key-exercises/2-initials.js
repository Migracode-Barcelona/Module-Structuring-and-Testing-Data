let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

// With use String.prototype.charAt()
let initials = `${firstName.charAt(0)}${middleName.charAt(0)}${lastName.charAt(0)}`;
console.log (initials);

// Bracket notation
let initial = firstName[0]+middleName[0]+lastName[0];
console.log (initial);

// https://www.google.com/search?q=get+first+character+of+string+mdn
