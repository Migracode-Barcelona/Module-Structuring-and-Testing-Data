// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  let [hourStr, minuteStr] = time.split(":");
  let hours = Number(hourStr);
  const minutes = minuteStr;

  let period = "am";

  if (hours === 0) {
    hours = 12;
  } else if (hours === 12) {
    period = "pm";
  } else if (hours > 12) {
    hours = hours - 12;
    period = "pm";
  }

  const hoursPadded = hours.toString().padStart(2, "0");

  return `${hoursPadded}:${minutes} ${period}`;
}

console.assert(
  formatAs12HourClock("08:00") === "08:00 am",
  "Test 08:00 failed"
);
console.assert(
  formatAs12HourClock("23:15") === "11:15 pm",
  "Test 23:15 failed"
);
console.assert(
  formatAs12HourClock("12:30") === "12:30 pm",
  "Test 12:30 failed"
);
console.assert(
  formatAs12HourClock("00:05") === "12:05 am",
  "Test 00:05 failed"
);
console.assert(
  formatAs12HourClock("13:01") === "01:01 pm",
  "Test 13:01 failed"
);

console.log("All tests passed!");
