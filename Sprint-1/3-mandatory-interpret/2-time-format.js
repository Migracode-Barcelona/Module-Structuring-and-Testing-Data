const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
There are 6 variables in this program, they are movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours and result.

// b) How many function calls are there?
Just one function call,which is the console.log function call on line 12.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
movieLength % 60 is the remainder of the division of movieLenth by 60.
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
The expression subtracts the leftover seconds from the total, then divides by 60 to convert the rest into whole minutes. With 8784 seconds, totalMinutes is 146.


// e) What do you think the variable result represents? Can you think of a better name for this variable?
t holds the movie’s length formatted as hours, minutes, and seconds: "2:26:24". A more descriptive name could be formattedMovieLength
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
he calculation works as intended for nonnegative whole-number values of movieLength (seconds). Negative or fractional values may produce unexpected results, and the output doesn’t add leading zeros—for example, it might show "2:6:4" instead of "2:06:04".

