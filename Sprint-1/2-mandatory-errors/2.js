// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

// Answer
// The error is that the variable ‘cityOfBirth’ is being used before it is declared and assigned a value.
// To fix the error, i need to declare and assign the variable before using it in the template literal.

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";