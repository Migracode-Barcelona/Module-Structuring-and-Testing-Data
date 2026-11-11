const twentyFourHourClockTime = "20:53";
const twelveHourClockTime = "08:53";

// Original error: SyntaxError: Invalid or unexpected token.
// Variable names cannot begin with digits, so both original names were invalid.
// These names begin with letters and also match the time formats they describe.
// The strings themselves were valid; the error was in the variable names.
// Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers
