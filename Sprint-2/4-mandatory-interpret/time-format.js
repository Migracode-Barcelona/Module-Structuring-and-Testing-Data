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
// pad is called 3 times—once for hours, once for minutes, and once for seconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// on the first call,num is 0 (TOTALHOURS).

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The first call to pad returns "00" because the input number is 0, and padStart adds a leading zero to make it two digits.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// on the last call, num is 1 (REMAININGSECONDS). This is because the input to formatTimeDisplay is 61 seconds, which results in 1 second remaining after calculating the total minutes and hours.
// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The last call to pad returns "01" because the input number is 1, and padStart adds a leading zero to make it two digits.
