function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    return Math.abs(numerator) < Math.abs(denominator);
}

module.exports = isProperFraction;