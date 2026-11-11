// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

// Original error: ReferenceError: Cannot access 'cityOfBirth' before initialization.
// The original program tried to read cityOfBirth before its const declaration ran.
// Move the declaration above console.log so the value exists when it is used.
// The output is now: I was born in Bolton
// Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
