const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are six variable declarations in this program: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, and result.

// b) How many function calls are there?
// There is one function call in this program: console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expression movieLength % 60 calculates the remainder when movieLength (which is in seconds) is divided by 60. This gives the number of seconds remaining after converting the total seconds into full minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Line 4 calculates the total number of full minutes in the movie length. It does this by subtracting the remaining seconds (which are less than a minute) from the total movie length in seconds, and then dividing the result by 60 to convert seconds into minutes.
    const totalMinutes = (movieLength - remainingSeconds) / 60;

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the formatted string of the movie length in hours, minutes, and seconds. A better name for this variable could be formattedMovieLength or timeFormatted.
    const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// The code will work for all non-negative integer values of movieLength. It correctly converts seconds into hours, minutes, and seconds format. However, if movieLength is negative or not an integer, the code may not produce meaningful results.

