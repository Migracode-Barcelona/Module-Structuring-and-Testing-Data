const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


// Math.random() gives a decimal between 0 and 1.
// (maximum - minimum + 1) gives us the size of the range (1–100 = 100 values).
// Multiplying them scales the decimal to the range.
// Math.floor removes the decimal so we get a whole number.
// Adding minimum shifts it so it starts at 1 instead of 0.
// So num ends up being a random number between 1 and 100.

console.log(num); // I tested this a few times and it prints different numbers each run.