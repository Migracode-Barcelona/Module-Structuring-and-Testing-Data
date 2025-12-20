function find(str, char) {
  let index = 0;

  while (index < str.length) {
    // a) How the index variable updates during the call to find:
    // The index variable starts at 0 and increases by 1 on each iteration of the loop.
    // This allows checking each character of the string in order.

    if (str[index] === char) {
      // b) What is the if statement used to check:
      // It checks whether the current character in the string matches the searched character (char).
      return index;
    }

    index++;
    // c) Why is index++ being used?
    // index++ increments the index by 1 so that the loop can move to the next character in the string.
  }

  // d) What is the condition index < str.length used for?
  // This condition ensures that the loop does not go beyond the string length.
  // When index equals the string length, the loop stops.
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// b) What is the if statement used to check
// c) Why is index++ being used?
// d) What is the condition index < str.length used for?
