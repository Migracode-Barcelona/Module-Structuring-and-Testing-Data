// implement a function countChar that counts the number of times a character occurs in a string
function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++;
  }
  return count;
}

module.exports = countChar;
