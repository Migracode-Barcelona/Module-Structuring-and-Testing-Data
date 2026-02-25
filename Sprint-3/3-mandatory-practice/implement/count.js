function countChar(stringOfCharacters, findCharacter) {
    return stringOfCharacters.split(findCharacter).length - 1;
}

module.exports = countChar;