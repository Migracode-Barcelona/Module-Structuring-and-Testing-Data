function getOrdinalNumber(num) {
  const j = num % 10,
    k = num % 100;
  if (k >= 11 && k <= 13) {
    return num + "th";
  }
  if (j === 1) return num + "st";
  if (j === 2) return num + "nd";
  if (j === 3) return num + "rd";
  return num + "th";
}

module.exports = getOrdinalNumber;
