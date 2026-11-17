// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

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

//Answer:// The original function did not handle midnight (00:00) correctly.
// It also treated midday (12:00) as am instead of pm.
// Another problem was that it changed the minutes to 00 for afternoon times.
// I added tests for these cases and corrected the function.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));

  if (hours === 0) {
    return `12${time.slice(2)} am`;
  }

  if (hours === 12) {
    return `${time} pm`;
  }

  if (hours > 12) {
    return `${hours - 12}${time.slice(2)} pm`;
  }

  return `${time} am`;
}