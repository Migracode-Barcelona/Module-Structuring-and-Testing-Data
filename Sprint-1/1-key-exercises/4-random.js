const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num)
//the minimum at the end will first be declared as 1
//then the first bracket from behind will be evaluated which will be (100-1+1) to equals 100
//these will be added (100 + 1= 101)
//math.random() gives a randon numer between 0 and 1
//applies the property math.random() * 101 - this means that it will produce a ranndom number between o and 101. this means i cannot predict what the output will be.
//math.floor() finishes up by roundinng down to the nearest whole number 
//outcome will e unpredictable