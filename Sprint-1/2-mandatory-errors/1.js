// trying to create an age variable and then reassign the value by 1

const age = 33;     
age = age + 1;

console.log(age); // This will throw an error because 'age' is declared as a constant using 'const' and cannot be reassigned.

//const creates a constant, meaning its value cannot be reassigned after it is declared.

//That’s why age = age + 1 throws an error

// To fix the error, i will use 'let' instead of 'const' for the age variable.
// Corrected code:

let age = 33;     
age = age + 1;

//let allows reassignment.

console.log(age);   // This will now correctly log 34 to the console.

/* we Use let if you really want to update the variable.
we Use const if the original value should never change and you want to store the result separately.*/
