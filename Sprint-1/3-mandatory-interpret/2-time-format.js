const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//ans: 6 (movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, result)
// b) How many function calls are there?
// ans: 1
// c) Using documentation, explain what the expression movieLength % 60 represents
//ans:  It calculates the leftover seconds after converting the total movie length into full minutes.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//ans: It subtracts the leftover seconds from the movie length and divides it by 60 to find the total number of full minutes.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
//ans: It represents the movie duration formatted as HH:MM:SS. A better name would be 'formattedDuration' or 'movieTime'.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//snd: Yes, it works for all positive numbers. However, if movieLength is less than 60, it will show 0 for hours and minutes, which is mathematically correct.
