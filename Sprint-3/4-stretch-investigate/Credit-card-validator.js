function validateCreditCard(cardNumber) {
  
  if (typeof cardNumber !== "string" || cardNumber.length !== 16) {
    return false;
  }

  let sum = 0;
  const uniqueDigits = new Set();

  for (let char of cardNumber) {
    
    if (char < "0" || char > "9") {
      return false;
    }
    sum += Number(char);
    uniqueDigits.add(char);
  }

  
  if (uniqueDigits.size < 2) {
    return false;
  }

  
  const lastDigit = Number(cardNumber[cardNumber.length - 1]);
  if (lastDigit % 2 !== 0) {
    return false;
  }

  
  if (sum <= 16) {
    return false;
  }

  return true;
}


console.log(validateCreditCard("9999777788880000")); // true
console.log(validateCreditCard("6666666666661666")); // true
console.log(validateCreditCard("a92332119c011112")); // false (invalid characters)
console.log(validateCreditCard("4444444444444444")); // false (only one type of number)
console.log(validateCreditCard("1111111111111110")); // false (sum less than 16)
console.log(validateCreditCard("6666666666666661")); // false (odd final number)

module.exports = validateCreditCard;