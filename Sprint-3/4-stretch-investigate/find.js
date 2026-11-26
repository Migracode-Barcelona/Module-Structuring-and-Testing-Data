function find(str, char) {
  let index = 0;

  // Continue searching while index is within the string length.
  while (index < str.length) {
    // Check whether the current character matches the target character.
    if (str[index] === char) {
      return index;
    }

    // Move to the next character.
    index++;
  }

  // Return -1 if the character is not found.
  return -1;
}

// Original examples
console.log(find("code your future", "u")); // 7
console.log(find("code your future", "z")); // -1

// Additional practice examples
console.log(find("javascript", "a")); // 1
console.log(find("javascript", "s")); // 4
console.log(find("javascript", "x")); // -1
