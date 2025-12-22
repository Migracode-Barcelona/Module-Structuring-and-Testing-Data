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

/* You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
3 times
pad(totalHours)
pad(remainingMinutes)
pad(remainingSeconds)

// Call formatTimeDisplay with an input of 61, now answer the following:
0
seconds = 61
remainingSeconds = 61 % 60 = 1
totalMinutes = (61 - 1)/60 = 60/60 = 1
remainingMinutes = 1 % 60 = 1
totalHours = (1 - 1)/60 = 0/60 = 0

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
0

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
00

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// 01 */
