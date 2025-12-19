const minimum = 5;
const maximum = 8;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// What `num` is (breakdown):
// 1. Math.random() produces a number in [0, 1).
console.log(Math.random());
// 2. Multiply by (maximum - minimum + 1) => the range available between minimum and maximum numbers.
console.log((maximum - minimum + 1));
// 3. Math.floor(...) round down the number and the same time has a side effect to convert the number to a integer number
// So `num` is a random integer between `minimum` and `maximum` (inclusive).
console.log(num);