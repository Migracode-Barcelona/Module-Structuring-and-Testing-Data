// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
  // The last digit will be 3. 

// const num = 103;

//function getLastDigit() {
  //return num.toString().slice(-1);
//}

//console.log(`The last digit of 42 is ${getLastDigit(42)}`);
//console.log(`The last digit of 105 is ${getLastDigit(105)}`);
//console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
 // Line 13: The last digit of 42 is 3
 // Line 14: The last digit of 105 is 3
 // Line 15: The last digit of 105 is 3

// Explain why the output is the way it is
// =============> write your explanation here
  // The num (103) and returns "3". Adding num as a parameter makes it use the number given. 

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.  
  // Now it's ok. 

// Explain why getLastDigit is not working properly - correct the problem
  //The function has no parameter. To fix it, added 'num' as a parameter to function getLastDigit(num).