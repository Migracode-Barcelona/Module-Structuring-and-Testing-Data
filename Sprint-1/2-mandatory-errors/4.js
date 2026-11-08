
// const twelveHourClockTime = "08:53 PM"; // 12-hour format
// const twentyFourHourClockTime = "08:53"; // 24-hour format

// The original bug was caused by invalid variable naming and an undefined variable.
const twelveHourClockTime = "08:53 PM";

const hour = parseInt(twelveHourClockTime.slice(0, 2), 10);
const minutes = twelveHourClockTime.slice(3, 5);
const meridiem = twelveHourClockTime.slice(6);

let convertedHour = hour;

if (meridiem === "PM" && hour !== 12) {
  convertedHour += 12;
} else if (meridiem === "AM" && hour === 12) {
  convertedHour = 0;
}

const convertedHourString = String(convertedHour).padStart(2, "0");
const correct24HourClockTime = `${convertedHourString}:${minutes}`;

console.log(correct24HourClockTime); // Output: 20:53