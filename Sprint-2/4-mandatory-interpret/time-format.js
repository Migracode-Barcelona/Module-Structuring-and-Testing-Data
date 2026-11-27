function pad(num) {
  return num.toString().padStart(2, "0"); //"00"
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60; // "1"
  const totalMinutes = (seconds - remainingSeconds) / 60; "1"
  const remainingMinutes = totalMinutes % 60; // "1"
  const totalHours = (totalMinutes - remainingMinutes) / 60; "0"

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`; // "00":"01":"01"
}

console.log(formatTimeDisplay(61)); // "00":"01":"01"

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
3 times// =============> write your answer here

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
"0", it refers to totalHours. JavaScripts runs the code from left to right.// =============> write your answer here

// c) What is the return value of pad is called for the first time?
"00", because of pad(0) to make a string with 2 charactors.// =============> write your answer here

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
"1", it refers to remainingSeconds.// =============> write your answer here

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
"01", because of pad(1) to make a string with 2 charactors.// =============> write your answer here
