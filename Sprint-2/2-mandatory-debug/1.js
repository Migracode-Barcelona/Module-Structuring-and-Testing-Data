// Predict and explain first...
//  =============> write your prediction here
/7Answer:The sum would be undefined because the return has no value.


function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here

//Answer:The value a + b which is being returned, shoulb be on the same line 
with the return, and also the semi colon should always be after the return value.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);