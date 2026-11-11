const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


//Answer: The variable num is assigned a random integer between the minimum and maximum values (inclusive).
//  The expression Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).
//  This value is then multiplied by the range of numbers (maximum - minimum + 1) to scale it to the desired range.
//  The Math.floor() function is used to round down to the nearest whole number, and finally, the minimum value is added to shift the range to start from the minimum value.

console.log(num);
