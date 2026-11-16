// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
//the error is because the variable str is written twice.
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
// =============> write your new code here
