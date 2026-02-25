function getOrdinalNumber(num) {
  if (num % 10 === 1 && num % 100 !== 11) {
    return num + "st";
  } else if (num % 10 === 2 && num % 100 !== 12) {
    return num + "nd";
  } else if (num % 10 === 3 && num % 100 !== 13) {
    return num + "rd";
  } else {
    return num + "th";
  }
}

module.exports = getOrdinalNumber;