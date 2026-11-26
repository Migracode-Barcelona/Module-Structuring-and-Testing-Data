function passwordValidator(password) {
    return password.length < 5 ? false : true
}


module.exports = passwordValidator;

//Answer:

function isValidPassword(password) {
    // Check that the password has at least 5 characters.
    if (password.length < 5) return false;

    // Check that it contains an uppercase letter.
    if (!/[A-Z]/.test(password)) return false;

    // Check that it contains a lowercase letter.
    if (!/[a-z]/.test(password)) return false;

    // Check that it contains a number.
    if (!/[0-9]/.test(password)) return false;

    // Check that it contains an allowed special character.
    if (!/[!#$%.*&]/.test(password)) return false;

    return true;
}

module.exports = isValidPassword;
