// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// The error occurs because the function expects a string argument.
// If no argument is passed, str is undefined, and accessing str[0]
// causes a TypeError since undefined has no properties.
// =============> write your new code here
function capitalise(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }

  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
