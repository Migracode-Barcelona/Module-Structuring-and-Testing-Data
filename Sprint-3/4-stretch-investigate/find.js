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
//It starts at 0 (let index = 0;) and increases by 1 on each pass through the while loop (index++) until either char is found or index reaches str.length
// b) What is the if statement used to check
//if (str[index] === char) checks whether the character at the current position (index) in the string str matches the target character char. If it matches, it immediately returns that index and exits the function.
// c) Why is index++ being used?
//It advances the position pointer to the next character in the string on each loop iteration. Without index++, index would stay at 0 forever, causing an infinite loop.
// d) What is the condition index < str.length used for?
//The condition index < str.length ensures that the loop continues as long as index is less than the length of the string. This prevents accessing characters outside the bounds of the string, which would result in an error.