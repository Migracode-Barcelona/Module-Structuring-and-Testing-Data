// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here 
// La función getLastDigit no toma ningún parámetro y always usa la variable global num que es 103.

// Explain why the output is the way it is
// =============> write your explanation here

//  getLastDigit no recibe un número como argumento, así que ignora los valores que se pasan en los console.log.

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

/* getLastDigit wasn't using the parameter because it had no defined parameters.
The correct function should take a number and return its last digit using .toString().slice(-1).
