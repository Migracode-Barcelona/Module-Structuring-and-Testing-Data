function isProperFraction(numerator, denominator) {
    if (numerator < 0 || denominator <= 0) return false;
    if (numerator < denominator) return true;
    return false;
}

module.exports = isProperFraction;