const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations in the program.

// b) How many function calls are there?
// The only function call I can see is 'console.log()'

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// This expression is storing the remainder of the division of 8784 and 60 (24) into the remainingSeconds variable.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/* This expression is giving us the total amount of minutes of the movie by first calculating 
movieLength (8784) - remainingSeconds (24) = 8760, and then dividing this number by 60 = 146.*/ 

// e) What do you think the variable result represents? Can you think of a better name for this variable?
/* It represent the total duration of the movie in minutes. I guess 'movieLengthInMinutes' could be more
specific and easy to understand, but also way longer*/

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
/* It does work, and it's because the most important number of the whole code is the total
time in seconds, the whole code is designed to run around the value of this specific variable.*/