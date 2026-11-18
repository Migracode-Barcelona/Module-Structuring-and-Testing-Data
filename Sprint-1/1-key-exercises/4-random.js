const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


console.log(num);
// The variable num represents a random integer between the values of minimum (1) and maximum (100), inclusive.

// Here’s how the expression works:
// 1. Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
// 2. Multiplying this random number by (maximum - minimum + 1) scales it to a range of values from 0 to (maximum - minimum + 1).
// 3. Math.floor() rounds down the resulting value to the nearest whole number, giving us an integer.
// 4. Finally, adding minimum shifts the range up so that it starts at the minimum value instead of 0.

// Therefore, each time you run the program, num will be assigned a new random integer between 1 and 100.