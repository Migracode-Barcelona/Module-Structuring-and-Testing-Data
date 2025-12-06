// const 12HourClockTime = "20:53";
// const 24hourClockTime = "08:53";

// Below is why the code above is wrong
// Variable names in JavaScript cannot start with a number (e.g. "12HourClockTime").
// "20:53" is actually a 24-hour time (8:53pm), not a 12-hour time.
// The names and values are confusing and don’t match the formats.

// Now to Fix the variable names so they are valid.
// I’ll start them with a letter instead of a number.

const twelveHourClockTime = "8:53pm"; 
const twentyFourHourClockTime = "20:53";

console.log("12-hour time:", twelveHourClockTime);
console.log("24-hour time:", twentyFourHourClockTime);