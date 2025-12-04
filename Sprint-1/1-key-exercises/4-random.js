const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//(maximum - minimum +1) this will give a result of 99+1
//Math.random will give a number lesser 1
//Math.floor(Math.random)*(maximum - minimum +1) this expression will round down the value
//* minimum will add 1 to the 99

//num = will be a random value from 0 to 100
