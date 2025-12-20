const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations (movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, result).


// b) How many function calls are there?
// There is 1 function call: console.log(result).

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// It uses the remainder operator (modulo). It calculates the seconds left over after dividing the total time into full minutes.


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// It subtracts the remaining seconds to get an exact multiple of 60, then divides by 60 to find the total number of full minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// It represents the formatted time string (HH:MM:SS). A better name would be 'formattedTime' or 'timestamp'.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// It works for positive integers. However, if movieLength is less than 3600, hours will be 0. It doesn't handle negative numbers or non-numeric input well.