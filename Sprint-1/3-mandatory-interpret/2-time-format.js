const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// Six: movieLength, remainingSeconds, totalMinutes, remainingMinutes,
// totalHours, and result. Each declaration uses const.

// b) How many function calls are there?
// One: console.log(result), on line 10.
// Arithmetic operators and the template literal are not function calls.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The % operator gives the remainder after division. movieLength % 60 gives
// the seconds left after taking out all complete minutes.
// For 8784 seconds, 8784 = 146 * 60 + 24, so remainingSeconds is 24.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Subtracting remainingSeconds removes the incomplete minute.
// Dividing the remaining seconds by 60 gives the number of complete minutes:
// (8784 - 24) / 60 = 146. totalMinutes includes the minutes in whole hours.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// result is the movie duration written as hours:minutes:seconds.
// It is "2:26:24" here. A clearer name would be formattedMovieDuration.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Running the same program with different inputs gave these results:
// 0 -> "0:0:0"; 59 -> "0:0:59"; 60 -> "0:1:0"; 61 -> "0:1:1".
// 3600 -> "1:0:0"; 3661 -> "1:1:1"; 90000 -> "25:0:0".
// The arithmetic works for ordinary nonnegative whole-second durations.
// Hours can exceed 23 because this is a duration, not a time of day.
// It does not add leading zeroes, so 61 gives "0:1:1", not "00:01:01".
// It does not handle every possible input as a whole-second duration:
// -1 gives "0:0:-1", 61.5 gives "0:1:1.5", and NaN gives "NaN:NaN:NaN".
// Negative values are invalid movie lengths, and fractional values need a
// decision about rounding if the required display uses whole seconds.
// Input validation and padding would be needed for a strict HH:MM:SS format.
