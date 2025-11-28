const movieLength = 86400 ; // length of movie in seconds

const remainingSeconds = movieLength % 60;
console.log(remainingSeconds);
const totalMinutes = (movieLength - remainingSeconds) / 60;
console.log(totalMinutes);
const remainingMinutes = totalMinutes % 60;
console.log(remainingMinutes);
const totalHours = (totalMinutes - remainingMinutes) / 60;
console.log(totalHours);
const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 5 variable declarations in this program. They are on the following lines:
// Line 1: const movieLength = 8784; // length of movie in seconds
// Line 3: const remainingSeconds = movieLength % 60;
// Line 5: const totalMinutes = (movieLength - remainingSeconds) / 60;
// Line 7: const remainingMinutes = totalMinutes % 60;
// Line 9: const totalHours = (totalMinutes - remainingMinutes) / 60;
// Line 11: const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;

// b) How many function calls are there?
// There is 1 function call in this program. It is on the following line:
// Line 11: console.log(result);
// Hint: Template literals are not function calls

// c) Using documentation, explain what the expression movieLength % 60 represents
// The expression movieLength % 60 calculates the remainder when movieLength is divided by 60.
// The % operator is known as the modulus operator, and it returns the remainder of a division operation.
// In this case, it is used to determine how many seconds are left over after accounting for complete minutes in the total movie length.
// For example, if movieLength is 8784 seconds, dividing by 60 gives 146 minutes with a remainder of 24 seconds.
// Therefore, movieLength % 60 would evaluate to 24.

// Documentation reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression assigned to totalMinutes is (movieLength - remainingSeconds) / 60.
// This expression calculates the total number of complete minutes in the movie length by first subtracting the remaining seconds from the total movie length (in seconds) 
// to get a value that is a multiple of 60 (i.e., the total seconds that can be evenly divided into minutes).
// Then, it divides that result by 60 to convert the total seconds into minutes.
// For example, if movieLength is 8784 seconds and remainingSeconds is 24 seconds, 
// then (8784 - 24) equals 8760 seconds, which when divided by 60 gives 146 minutes.
// Therefore, totalMinutes would evaluate to 146.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the formatted string of the movie length in hours, minutes, and seconds (HH:MM:SS).
// A better name for this variable could be formattedMovieLength or movieDurationFormatted, as these names more clearly indicate that the variable holds a formatted representation of the movie length.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// This code will work for all non-negative integer values of movieLength, as it correctly calculates the hours, minutes, and seconds for any given length in seconds.
// However, if movieLength is a negative value, the calculations may not make sense in the context of time duration, 
// as negative time durations are not typically represented in hours, minutes, and seconds.
// Additionally, if movieLength is not an integer (e.g., a floating-point number), the calculations may yield unexpected results due to the way division and modulus operations work with non-integer values.
// Therefore, it is advisable to ensure that movieLength is a non-negative integer for the code to function as intended.
// If movieLength is extremely large, the code will still work, but we should consider adding additional formatting to handle cases where the number of hours exceeds 24.
