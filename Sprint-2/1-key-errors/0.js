// Predict and explain first...
//  SyntaxError because the parameter 'str' is redeclared using let inside the same function scope. 



// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = ${str[0].toUpperCase()}${str.slice(1)};
//   return str;
// }

// Explanation:
// The error occurs because 'str' is already declared


// New code:

function capitalise(str) {
  let newStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return newStr;
}

console.log(capitalise("hello Codebuddy!"));