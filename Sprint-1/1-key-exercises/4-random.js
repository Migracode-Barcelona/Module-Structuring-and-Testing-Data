const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// ANSWER: 'num' represents a randomly generated whole number between 1 and 100 inclusive.
// - Math.random() generates a decimal between 0 and 1.
// - (maximum - minimum + 1) defines the total range of numbers (100).
// - Math.floor() rounds the number down to get an integer from 0 to 99.
// - Adding 'minimum' shifts the final range to be between 1 and 100.
