// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;

// Answer
// console.log(age); // This would throw because a const cannot be reassigned.
// const creates a constant, meaning its value cannot be reassigned after it is declared.
// That’s why age = age + 1 throws an error
// To fix the error, i will use ‘let’ instead of ‘const’ for the age variable.
// let allows reassignment.
// console.log(age); // This will now correctly log 34 to the console.