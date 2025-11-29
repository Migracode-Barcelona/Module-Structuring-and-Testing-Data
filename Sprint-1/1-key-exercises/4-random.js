const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);


// In this exercise, you will need to work out what num represents

// Try breaking down the expression and using documentation to explain what it means
// ANSWER: 
// - Math.floor is rounding down the number to the nearest whole number
// - Math.random() is generating a random decimal number between 0 and 1
// - (maxium-minimun + 1) is calculating the possibilite range of numbers that we want
// - minimun set the number to start at the minimum value (1). This way, the final result will be between 1 and 100.
// - num is a whole number aleatory between 1 and 100


// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing. DONE
