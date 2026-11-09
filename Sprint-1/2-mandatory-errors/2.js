// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";
//Answer
//The variable cityOfBirth is accessed before const was initialized because the variable is supposed to be called first and given a value before logging which is the other way around hence the ReferenceError. So move the declaration before the console.log.