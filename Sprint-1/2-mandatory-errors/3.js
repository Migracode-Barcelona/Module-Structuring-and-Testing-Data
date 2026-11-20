const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);

let last4Digits = console.log (cardNumber.toString().slice(-4));

//or 

const cardNum = "4533787178994213";
const last4Digit = cardNum.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value


// cardNumber.slice is not a function. So, it is needed to change. And also .slice() function is valid for string and array, not valid in number. 
// So, it's needed to make the string for cardNumber. 