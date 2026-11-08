// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

/* The error happens because of the order of the code, we seem to be trying to
log the variable into the console before it is declared; the order must be inverted
for the program to be properly executed.*/
