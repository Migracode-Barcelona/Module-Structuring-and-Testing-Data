// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

//Answer: There would be an error because the variable cityOfBirth is being used before it was declared. 
// The correct way to write it is to declare the variable first before using it.

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);