function passwordValidator(password) {
    return password.length < 5 ? false : true
}

function isValidPassword(password, previousPasswords = []) {
    if (password.length < 5) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (!/[a-z]/.test(password)) return false;
    if (!/[0-9]/.test(password)) return false;
    if (!/[^A-Za-z0-9]/.test(password)) return false;
    if (previousPasswords.includes(password)) return false;
    return true;
}   


module.exports = passwordValidator;

