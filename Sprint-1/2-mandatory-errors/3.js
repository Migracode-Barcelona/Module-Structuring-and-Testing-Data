// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);
// Prediction: A TypeError will occur because cardNumber is a number, and .slice() is a string method that cannot be used on numbers directly.
// Error given: TypeError: cardNumber.slice is not a function
// Explanation: The prediction was correct. To fix this, we must first convert the number to a string using .toString() before applying .slice().
