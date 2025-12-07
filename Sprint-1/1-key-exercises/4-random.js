const minimum = 1;
const maximum = 100;

let random_number=Math.random(); //Math.random() is pre defined javascript function which generate an integer or float number between 0 and 1 but not including 1
const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; //Math.floor is pre defined javascript function which return the closest lowest number to the given parameter
console.log(`Our random number is ${random_number} and if we multiply it by ${maximum+minimum+1} it will be = ${random_number * (maximum - minimum +1) + minimum} and the closest down round is ${num}`);


// In this exercise, you will need to work out what num represents?
//num represents a random integer between 1 and 100                 
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//num represents a random integer between 1 and 100, created by combining Math.random() to generate randomness, Math.floor() to remove decimals, and then adjusting the number into the desired range.