const cardNumber = "4533787178994213";
const last4Digits = cardNumber.slice(-4);
console.log(last4Digits)

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//sol. 
// I predict it will call the fourth digit from behind. this is because it wasn't specified to return from the last digit(3) to the fourth from behind(4). the correct code should be ...(-1, -4)

// so i found out that ".slice" doesn't work on number except strings. to achieve this the code will be
//const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.toString().slice(-4);
//console.log(last4Digits)
//adding .toString property makes the system convert the numbers to a strinngg before slicing.

//OR
// adding a "" to the numbers ("4533787178994213") to make it a string