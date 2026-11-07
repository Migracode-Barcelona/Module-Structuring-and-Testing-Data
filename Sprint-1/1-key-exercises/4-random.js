const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);

/*I logged it multiple times and it gave me different outputs: 18, 4, 42, (...). As far as I understood,
the expression is calculated using first Math.random() (which gives a random number between 0 and 1), 
then multiplying the result by the result of maximum - minimum + 1 (100), 
then it adds minimum (1), and finally, Math.floor() rounds down the result into the nearest integer.*/