// Predict and explain first...
// The capitalise function takes a string as its input and returns a new string with the first letter capitalised. 

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
//let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//return str;
//}

// =============> write your explanation here
  //str[0] provides the first letter of the string 
  //.toUpperCase() converts all the letters or characters in a string to uppercase
  //str.slice(1) extracts a section of the string starting at 1 and continuing to the end which returns the rest of the input. 
  //return str; returns the result


// =============> write your new code here
  function capitalise(str) {
    str = `${str[0].toUpperCase()}${str.slice(1)}`;
    return str; 
  }

console.log(capitalise("palangga"));

// also learned, albeit late, that the identifier has also been declared which threw a syntax error. 