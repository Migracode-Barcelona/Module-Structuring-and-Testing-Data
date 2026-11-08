const minimum = 1;
const maximum = 100;

let random_number = Math.random(); // Math.random() is a predefined JavaScript function that generates a number between 0 and 1, not including 1
const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; // Math.floor returns the closest lower integer
console.log(`Our random number is ${random_number} and if we multiply it by ${maximum - minimum + 1} it will be = ${random_number * (maximum - minimum + 1)}`);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
