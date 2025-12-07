const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);
// Prediction: I predict that the code won't work because cardNumber is a number, and the slice method is a string method. Therefore, trying to call slice on a number will likely result in a TypeError indicating that slice is not a function for numbers.
console.log(last4Digits);

/*cardNumber is a number.
Numbers in JavaScript don’t have a slice method—slice only works on strings or arrays.
So the code will throw an error like:*/
// TypeError: cardNumber.slice is not a function


// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

const cardNumberCorrected = 4533787178994213;
const last4DigitsCorrected = cardNumberCorrected.toString().slice(-4);
console.log(last4DigitsCorrected);  
// Corrected code: Convert cardNumber to a string using toString() before calling slice. This will allow us to successfully extract the last 4 digits.
// Output: 4213
// Now the code works as expected and prints the last 4 digits of the card number.


