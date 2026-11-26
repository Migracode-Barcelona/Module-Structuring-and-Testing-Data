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
// b) What is the if statement used to check
// c) Why is index++ being used?
// d) What is the condition index < str.length used for?

//Answer:
a) The index variable updates by incrementing by 1 each time the while loop iterates. It starts at 0 and increases until it reaches the length of the string.
b) The if statement is used to check if the character at the current index of the string matches the character we are searching for.
c) The index++ is being used to increment the index variable by 1 in each iteration of the while loop, allowing us to check each character in the string.
d) The condition index < str.length is used to ensure that we do not access an index that is out of bounds for the string.



