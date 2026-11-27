// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.


function formatAs12HourClock(time) {

  const paddedTime = (time).padStart(5, "0")
  const hours = Number(paddedTime.slice(0, 2)); // 23
  const minutes = Number(paddedTime.slice(-2)); // 5

if (minutes >= 60 || hours > 24) {
  return "Input Error"
}

  const formatMinutes = minutes.toString().padStart(2,"0"); // "05"
  const formatHourT1 = (hours - 12).toString().padStart(2,"0"); // "11"

  if (hours > 12) { // 23 > 12
    return `${formatHourT1}:${formatMinutes} pm`; // "11:05 pm"
  }
  const formatHourT2 = hours.toString().padStart(2,"0")
  if (hours < 12) {
    return `${formatHourT2}:${formatMinutes} am`;
  }
  const formatHourT3 = (hours).toString().padStart(2,"0")
  if (hours === 12) {
    return `${formatHourT3}:${formatMinutes} pm`;
  }
  const formatHourT4 = (hours).toString().padStart(2,"0");
  if (hours === 24) {
    return `${formatHourT4}:${formatMinutes} am`;
  }
}

console.log(formatAs12HourClock("6:40")); // predit = 06:40 am
console.log(formatAs12HourClock("12:40")); // predit = 12:40 pm
console.log(formatAs12HourClock("24:40")); // why 12:40 pm? (result), predit = 00:40 am
console.log(formatAs12HourClock("22:40")); // predit = 10:40 pm
console.log(formatAs12HourClock("6:60")); // predit = Input Error
console.log(formatAs12HourClock("6:6")); // why 00:NaN am? (result), predit = 06:60 am or Input Error
console.log(formatAs12HourClock("28:40")); // predit = Input Error
console.log(formatAs12HourClock("06:4")); // predit = 06:40 am, why 00:NaN am? (result),


// The given is not working when the minutes not equal to 00. So, consider for the minutes.

// for the minutes, const minutes = Number(time.slcie(-2));

/* given function
function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2)); 
  if (hours > 12) { 
    return `${hours - 12}:00 pm`; 
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
*/
