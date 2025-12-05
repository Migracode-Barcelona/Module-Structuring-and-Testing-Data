// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

// The error was that the variable 'cityOfBirth' was used before it was declared.
// Using 'const', a variable must be declared before it can be accessed.
// Correct order: first declare the variable, then use it in console.log.