const getOrdinalNumber = require("./get-ordinal-number");

// In this week's prep, we started implementing getOrdinalNumber
// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"
test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

// Case 2: Identify the ordinal number for 2
test("should return '2nd' for 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});

// Case 3: Identify the ordinal number for 3
test("should return '3rd' for 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
});

// Case 4: Identify the ordinal number for 4
test("should return '4th' for 4", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
});

// Case 5: Identify the ordinal number for 11 (special teen case)
test("should return '11th' for 11", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
});

// Case 6: Identify the ordinal number for 12 (special teen case)
test("should return '12th' for 12", () => {
  expect(getOrdinalNumber(12)).toEqual("12th");
});

// Case 7: Identify the ordinal number for 13 (special teen case)
test("should return '13th' for 13", () => {
  expect(getOrdinalNumber(13)).toEqual("13th");
});

// Case 8: Identify the ordinal number for 21
test("should return '21st' for 21", () => {
  expect(getOrdinalNumber(21)).toEqual("21st");
});

// Case 9: Identify the ordinal number for 22
test("should return '22nd' for 22", () => {
  expect(getOrdinalNumber(22)).toEqual("22nd");
});

// Case 10: Identify the ordinal number for 23
test("should return '23rd' for 23", () => {
  expect(getOrdinalNumber(23)).toEqual("23rd");
});

// Case 11: Identify the ordinal number for 101
test("should return '101st' for 101", () => {
  expect(getOrdinalNumber(101)).toEqual("101st");
});
