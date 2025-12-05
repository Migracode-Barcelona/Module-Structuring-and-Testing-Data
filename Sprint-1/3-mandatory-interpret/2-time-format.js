const movieLength = -733.77; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalmovieHours = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalmovieHours % 60;
const totalHours = (totalmovieHours - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);
console.log(remainingSeconds)
console.log(totalmovieHours)
// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
  // we have 5 variables

// b) How many function calls are there?
    // i will say consol.log is the only function calls here so - 1

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
    // this expression is a remainder operator will outtput the remainder after the one operand and tthe second operand has been divided.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
    // the expression means that the outcome of the subtractor in the brackets will be divided by 60. 

// e) What do you think the variable result represents? Can you think of a better name for this variable?
    //the result evaluates tthe hours and not the minutes so the variable identifier is wrong. it should be "totalHours" but since that is already defined below we could use "totalmovieHours"

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
    // i believe it would work irrespective of how high or low the numeric values are. this is because it uses mathematical operators. 
    //at first i thought it may not work on negative number or numbers with a decimal but it still evaluated them all. Although these outputs do not represent valid real life  minutes/hours 
