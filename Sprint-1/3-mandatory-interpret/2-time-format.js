const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//Answer: There are 6 variable declarations in this program: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, and result.

// b) How many function calls are there?
//Answer: There is 1 function call in this program, which is console.log(result).

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//Answer: The expression movieLength % 60 calculates the remainder when movieLength is divided by 60. 

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//Answer : is the total number of complete minutes in the movie, after removing the remaining seconds.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//Answer: The variable result represents the formatted time of the movie in hours, minutes, and seconds. 

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//Answer: The code will work for all non-negative integer values of movieLength, as it correctly calculates the hours, minutes, and seconds. However, if movieLength is negative or not an integer, the output may not be meaningful or accurate.