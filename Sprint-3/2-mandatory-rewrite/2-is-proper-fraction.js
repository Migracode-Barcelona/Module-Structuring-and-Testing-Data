function isProperFraction(numerator, denominator) {
  if (Math.abs(numerator) < Math.abs(denominator)) return true;
  return false;
}

module.exports = isProperFraction;