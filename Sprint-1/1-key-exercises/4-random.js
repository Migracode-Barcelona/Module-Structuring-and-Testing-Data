const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// num is a random whole number from 1 to 100, including both endpoints.
// Breaking down the expression:
// 1. maximum - minimum + 1 is 100: the number of possible whole-number results.
// 2. Math.random() returns a number greater than or equal to 0 and less than 1.
// 3. Multiplying that number by 100 gives a number from 0 up to, but not including, 100.
// 4. Math.floor() rounds down, producing a whole number from 0 to 99.
// 5. Adding minimum (1) shifts that range to 1 through 100.
// For example, if Math.random() returns 0.42, the calculation gives 42 + 1 = 43.
// Runs can produce different values, but the same value can also occur again.

console.log(num);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
