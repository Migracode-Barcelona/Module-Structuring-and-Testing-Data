function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    // add your completed function from key-implement here
    if (numerator > denominator) return false;
    if (numerator <= 0 || denominator <= 0) return false;
    if (numerator === denominator) return false;
    return false;
    
}

module.exports = isProperFraction;
