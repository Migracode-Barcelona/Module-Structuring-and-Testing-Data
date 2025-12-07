// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

// The error is that the variable 'cityOfBirth' is being used before it is declared and assigned a value.
// To fix the error, i need to declare and assign the variable before using it in the template literal.

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
// Now it will correctly print: I was born in Bolton
//This works because the variable is defined before it is used.
// Alternatively, i could also use a regular string concatenation:
console.log("I was born in " + cityOfBirth);
// This will also correctly print: I was born in Bolton
// Both methods will work as long as the variable is defined before it is used.
