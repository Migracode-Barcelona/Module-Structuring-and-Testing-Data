// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

//this will give an error as the console is first called before the variable. the proper way is for the variable to be declared first before logging as the system starts to execute from the top line. 