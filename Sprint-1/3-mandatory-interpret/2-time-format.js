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

/* Answer
f) for decimal and negative value, eventhough the code is working, the result also include decimal & negative like input value.

// if movieLength = 1000
let movieLength = 1000; // length of movie in seconds

let remainingSeconds = movieLength % 60; // 40
let totalMinutes = (movieLength - remainingSeconds) / 60; // 16

let remainingMinutes = totalMinutes % 60; // 16
let totalHours = (totalMinutes - remainingMinutes) / 60; // 0

let totalMovieLength = `${totalHours}:${remainingMinutes}:${remainingSeconds}`; // '0:16:40'
console.log(totalMovieLength); // 0:16:40

// if movieLength = -1000
let movieLength = -1000; // length of movie in seconds

let remainingSeconds = movieLength % 60; // -40
let totalMinutes = (movieLength - remainingSeconds) / 60; // -16

let remainingMinutes = totalMinutes % 60; // -16
let totalHours = (totalMinutes - remainingMinutes) / 60; // 0

let totalMovieLength = `${totalHours}:${remainingMinutes}:${remainingSeconds}`; // '0:-16:-40'
console.log(totalMovieLength); // 0:-16:-40

// / if movieLength = 500.23
let movieLength = 500.23; // length of movie in seconds

let remainingSeconds = movieLength % 60; // 20.2300....
let totalMinutes = (movieLength - remainingSeconds) / 60; // 8

let remainingMinutes = totalMinutes % 60; //  8
let totalHours = (totalMinutes - remainingMinutes) / 60; // 0

let totalMovieLength = `${totalHours}:${remainingMinutes}:${remainingSeconds}`; // '0:8:20.2300000...'
console.log(totalMovieLength); // 0:8:20.23000.....

a) There are 6 variable declarations.

b) Only function, that is console.log(result);

c) % means the reminder. The expression movieLength % 60 represents the reminder of the movielength(8784) divided by 60, so the reminder is 24.

d) const totalMinutes = (movieLength - remainingSeconds) / 60; so totalMintues = (8784 - 24) / 60 = 146

e) The variable result represents the total time of movielenght in  format like hr:min:sec. It should be given the name "totalMoveLength".

