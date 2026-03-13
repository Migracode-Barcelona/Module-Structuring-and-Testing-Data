function validateCreditCard(cardNumber) {
    //chack that all characters are digits
    if (!/^\d+$/.test(cardNumber)) {
        return false;
    }
    //Check credit card length = 16 digits
    if (cardNumber.length !== 16) {
        return false;
    }
    // Check that there are at least two different digits, all digits cannot be the same
    const uniqueDigits = new Set(cardNumber);
    if (uniqueDigits.size < 2) {
        return false;
    }
    // Check that the final digit is even
    const lastDigit = parseInt(cardNumber[cardNumber.length - 1]);
    if (lastDigit % 2 !== 0) {
        return false;
    }
    // check that the sum of all digits is greater than 16
const sumOfDigits = cardNumber.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
console.log ("Sum of digits: " + sumOfDigits);
if (sumOfDigits <= 16) {
    return false;
}
    return true;
}


module.exports = validateCreditCard;

