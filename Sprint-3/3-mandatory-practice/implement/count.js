function countChar(stringOfCharacters, findCharacter) {
  let count = 0;
  for (let char of stringOfCharacters) {
    if (char === findCharacter) {
      count++;
    }
  }
  return count;
}
module.exports = countChar;