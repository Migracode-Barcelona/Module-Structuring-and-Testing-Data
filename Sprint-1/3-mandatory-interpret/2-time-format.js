const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions


// a) How many variable declarations are there in this program?
/* 6 variables 
movieLength
remainingSeconds
totalMinutes
remainingMinutes
totalHours
result

// b) How many function calls are there?
1 call
console.log(result)

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

% is the modulo operator.
It returns the remainder of dividing movieLength by 60.
In this case: it calculates how many seconds are left over after counting the full minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

First, subtract the remaining seconds to get only the whole seconds in minutes. Then, divide by 60 to convert seconds to whole minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?

The result contains a string in the format: hours:minutes:seconds
movieDurationString


// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

It works for positive numbers of seconds. */
