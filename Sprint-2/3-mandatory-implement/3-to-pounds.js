// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

/*
const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);

const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");

console.log(`£${pounds}.${pence}`); */

function toPounds(penceString) {
    let penceStringWithoutTrailingP = penceString.slice(0,-1); // "399"
    let totalDigits = penceStringWithoutTrailingP.padStart(3,"0"); // "399", to ensure that atleast 3 charactors
    let pounds = totalDigits.slice(0,-2); // "3"
    let penceDigits = totalDigits.slice(-2); // 99
    let pence = penceDigits.padEnd(2,"0"); // 99
    return `${pounds}.${pence}`;
}
console.log (toPounds("399p"));
console.log (toPounds("8993p"));