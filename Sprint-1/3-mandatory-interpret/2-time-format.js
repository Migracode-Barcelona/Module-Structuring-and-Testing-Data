const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//ANSWER: There are 6 variable declarations. 1. movieLength, 2. remainingSeconds, 3. totalMinutes, 4. remainingMinutes, 5. totalHours, 6. result

// b) How many function calls are there?
//ANSWER: There is 1 function call. 1. console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// ANSWER: Is a remainder operator. The first number (movieLength) is divided by the second number (60) and the result is the remainder of that division.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//ANSWER: is the calculation of the whole number of full minutes passed during the duration of the film.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//ANSWER: Represents the total duration of the film formatted as a text string in the Hours:Minutes:Seconds format (‘2:26:24’).
// A better name could be formattedMovieLength.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//ANSWER: Won`t work for all values, like for negative numbers or non-integer values (decimals).

