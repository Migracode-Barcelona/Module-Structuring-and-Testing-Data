// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*
function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
} */

function name is capitalise and the parameter is str. str[0].toUpperCase() function makes the first letter
to be capitalize and str.slice(1) function starts slicing at position 1. let variable is inside the function, so 
the function capitalise is not working. // =============> write your explanation here

function capitalise (str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
let str = "hello everyone"
console.log(capitalise(str));
// =============> write your new code here
