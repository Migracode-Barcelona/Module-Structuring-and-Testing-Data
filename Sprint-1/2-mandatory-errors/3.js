// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

const cardNumber = 4533787178994213;

// Prediction:
// This code will not work because cardNumber is a number.
// The slice() method only works on strings or arrays, not on numbers.
// So trying to run cardNumber.slice(-4) will cause an error.

// After running the code, the error says: "TypeError: cardNumber.slice is not a function"
// This confirms the prediction because JavaScript cannot slice a number.


// To Fix This:
// Convert the number into a string first, then slice the last 4 characters.

const fixedLast4Digits = String(cardNumber).slice(-4);
console.log(fixedLast4Digits);