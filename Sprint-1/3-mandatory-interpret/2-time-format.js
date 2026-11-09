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

//Answer
// a) Total of 6
// b) None
// c) The % gives the reminder of movieLength after division by 60.
// d) It means after the remainingSeconds that don't form a minute have been gotten, it is subtracted from the movieLength and the answer is divided by 60 to get the totalMinutes the movie shows for.
// e) It represents after conversion the total hours, after that remainder that complete minutes that don't form hours and after that remains the seconds that don't form both hours and minutes to a total time string. A better name will be totalMovieLength.
// f) it works with changes in movieLength but only if it stays a non-negative whole numbers in seconds which gives wrong time formats.
