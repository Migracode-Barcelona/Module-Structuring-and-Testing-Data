const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// b) How many function calls are there?

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer


// (a) There are 6 variable declarations in this program.
// The variables are declared on these lines:
// 1. const movieLength = 8784;
// 2. const remainingSeconds = movieLength % 60;
// 3. const totalMinutes = (movieLength - remainingSeconds) / 60;
// 4. const remainingMinutes = totalMinutes % 60;
// 5. const totalHours = (totalMinutes - remainingMinutes) / 60;
// 6. const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;

// (b) There is 1 function call in this program.
// The function call is on this line:
// console.log(result);

// (c) The expression movieLength % 60 uses the remainder operator (%).
// It gives the number of seconds left over after removing full minutes.
// Example: If movieLength was 125 seconds so 125 % 60 = 5 (5 seconds left).
// So movieLength % 60 calculates the remaining seconds.

// (d) Line 4 calculates totalMinutes. 
// The expression (movieLength - remainingSeconds) removes the leftover seconds,
// and dividing by 60 converts the result into full minutes.
// So totalMinutes represents the total number of whole minutes in the movie.

// (e) The variable `result` represents the final formatted time in the form HOURS:MINUTES:SECONDS.
// A clearer name for this variable could be `formattedTime` or `movieDuration`.

// (f) This code works correctly for any positive whole number of seconds.
// It will not work properly for negative numbers or decimal values,
// because time cannot be negative and minutes/seconds must be whole numbers.
// But for normal inputs (like movie lengths), the code works as expected.

