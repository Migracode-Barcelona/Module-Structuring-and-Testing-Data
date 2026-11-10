// trying to create an age variable and then reassign the value by 1

let age = 33;
age = age + 1;

// Original error: TypeError: Assignment to constant variable.
// A variable declared with const cannot be reassigned a different value.
// Using let allows the reassignment: 33 + 1 is stored back in age, making it 34.
// Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment

console.log(age);
