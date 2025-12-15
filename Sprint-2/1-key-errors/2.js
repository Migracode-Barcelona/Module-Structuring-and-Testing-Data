
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// I predict there will be a SyntaxError because you cannot put a number (3) 
// directly in the parentheses of a function definition. 
// Function parameters must be valid variable names.

function square(3) {
    return num * num;
}

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// The error occurs because the function parameter is incorrectly written as a literal number (3). 
// JavaScript expects a variable name to use as the parameter, not a value.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}

// Example usage:
console.log(square(3)); // 9

