const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);

// Explanation:
// 1. Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive) [0, 1) .
// 2. Multiplying this random number by (maximum - minimum + 1) scales it to a range of 0 (inclusive) to (maximum - minimum + 1) (exclusive).
// 3. Math.floor() then rounds this scaled number down to the nearest whole number, resulting in an integer from 0 to (maximum - minimum).
// 4. Finally, adding 'minimum' shifts this range up, resulting in a final value between 'minimum' and 'maximum' (both inclusive).
// Therefore, 'num' represents a random integer between 1 and 100, inclusive.
