/* Predict and explain first...
//  =============> write your prediction here
The `sum` function has a `return` statement on one line and then `a + b` on another.
In JavaScript, if you put `return` alone, without a value, on the same line, the function returns `undefined`.*/

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

/* =============> 
  The return statement terminates the function's execution on that line.
The expression a + b is never executed.

// Finally, correct the code to fix the problem
//  =============> */
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);


