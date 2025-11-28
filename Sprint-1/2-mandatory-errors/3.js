const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);
// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value



// TypeError: cardNumber.slice is not a function 
// The error occurs because cardNumber is a number, and the slice() method is not defined for numbers.
// The slice() method is a string method, so to use it, we need to convert cardNumber to a string first.
// To fix the error, we can use the toString() method to convert cardNumber to a string before calling slice().
// Updated code:
let last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);
last4Digits = Number(last4Digits);
typeof last4Digits;
console.log(`Last four digits of cardNumber are ${last4Digits} and type of this variable is ${typeof last4Digits}`);

