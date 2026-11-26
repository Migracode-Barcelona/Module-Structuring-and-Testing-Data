function isProperFraction(numerator, denominator) {
  if (Math.abs(numerator) < denominator) return true;
  else return false;
}

module.exports = isProperFraction;
