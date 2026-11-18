const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations in this program: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, and result.

// b) How many function calls are there?
// There are 2 function calls in this program: console.log(result) and the template literal used to create the result string.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression assigned to totalMinutes calculates the total number of minutes in the movie length by subtracting the remaining seconds from the total movie length and then dividing by 60. This gives the total number of complete minutes in the movie length.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the formatted string that shows the movie length in hours, minutes, and seconds. A better name for this variable could be formattedMovieLength or movieDurationString to make it more descriptive of its purpose.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// The code will work for all non-negative integer values of movieLength, as it correctly calculates the hours, minutes, and seconds based on the total length in seconds. However, if movieLength is negative or not an integer, the calculations may not produce meaningful results. For example, a negative value would not make sense in the context of a movie length, and a non-integer value could lead to unexpected behavior in the calculations.