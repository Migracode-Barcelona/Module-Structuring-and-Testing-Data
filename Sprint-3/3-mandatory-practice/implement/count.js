function countChar(stringOfCharacters, findCharacter) {
    let count = 0;
    let arrOfChars = stringOfCharacters.split("");
    console.log(arrOfChars)

    arrOfChars.forEach(char => {
        if (char === findCharacter) count++
    
    })
       
     return count;


       };
        

 console.log(
    countChar("abcdefg", "c"));
    
    

module.exports = countChar;