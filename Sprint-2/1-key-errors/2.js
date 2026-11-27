
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

It is not working well because there is no variable  yet. // =============> write your prediction of the error here

/*
function square(3) {
    return num * num;
} */

While I run this,  uncaught SyntaxError shown.// =============> write the error message here

Function parentheses require a variable in parameter, not a number like 3.
JavaScript shows a SyntaxError because a number cannot be used as a variable.
// =============> explain this error message here

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}
const num = 3
console.log(square(num));

