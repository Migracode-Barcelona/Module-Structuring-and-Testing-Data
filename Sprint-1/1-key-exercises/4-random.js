const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log (num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/*
There is no parenthese around minumun + 1, so do left to right oder calculation, 100 - 1 + 1 = 100
so, Math.random() * 100 , mean random decimal between 0 and 99.99999..., and also that can be 0, but not be 100. 
then, if Math.random () * 100 be 1.708, Math.floor(1.708) be 1 and then, 1 + minimum = 2, so num can be 2.
If Math.random () * 100 be 70.99, Math.floor(70.99) be 70 and then, 70 + minimum = 71, so num can be 71.
*/