const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// Analysis of the original code: cardNumber is a number, and numbers do not
// have a slice method. Trying to call that missing method causes a TypeError.
// Running the original code confirmed: TypeError: cardNumber.slice is not a function.
// String(cardNumber) converts the number to text. slice(-4) then extracts the
// final four characters, so last4Digits contains the string "4213".
// Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_function
// Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

console.log(last4Digits);
