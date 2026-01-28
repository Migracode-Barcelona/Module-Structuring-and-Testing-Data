function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}


console.log(find("code your future", "u"));
console.log(find("code your future", "z"));



// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
//// The index variable starts at 0 (the beginning of the string). After every unsuccessful check in the if statement, index++ adds 1 to the value.
// This allows the function to move sequentially from left to right through the string (0, 1, 2, 3...).

// b) What is the if statement used to check
//The if statement checks for equality. It looks at the character currently stored at str[index] and compares it to the char argument.
// If they are an exact match, the function stops immediately and returns the current position.

// c) Why is index++ being used?
 //This is the "iterator." Without index++, the loop would be stuck on index 0 forever because the condition index < str.length would always stay true.
// This would cause an infinite loop, likely crashing your browser or terminal.

// d) What is the condition index < str.length used for?
// This is the boundary condition. It ensures the loop only runs while there are still characters left to check.
// Once index reaches the length of the string, it means we have checked every character and should stop to avoid looking for "ghost" characters that don't exist.
