function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// Answer: 3 times, because pad() is called for totalHours,
// remainingMinutes, and remainingSeconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// Answer: 0, because the first call to pad() is pad(totalHours),
// and totalHours is 0 when formatTimeDisplay(61) is called.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// Answer: "00", because num is 0. It is converted to a string "0",
// and padStart(2, "0") adds another 0 to make it two characters.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// Answer: 1, because the last call to pad() is pad(remainingSeconds),
// and remainingSeconds is 1 when the input is 61.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// Answer: "01", because num is 1. It is converted to "1",
// and padStart(2, "0") adds a 0 at the beginning.