function getOrdinalNumber(num) {
 return "1st";
}

module.exports = getOrdinalNumber;

//Anwer:
function getOrdinalNumber(num) {
  if (num % 100 >= 11 && num % 100 <= 13) {
    return num + "th";
  }

  if (num % 10 === 1) return num + "st";
  if (num % 10 === 2) return num + "nd";
  if (num % 10 === 3) return num + "rd";

  return num + "th";
}

module.exports = getOrdinalNumber;