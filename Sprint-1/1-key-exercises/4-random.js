const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
//Answer:
// The variable 'num' stores a random integer between 'minimum' (1) and 'maximum' (100), inclusive.
// Math.random() generates a random number from 0 up to (but not including) 1.
// Multiplying by (maximum - minimum + 1) scales it to the desired range.
// Math.floor() rounds down to the nearest whole number.
// Adding 'minimum' shifts the range so it starts at 1 instead of 0.
