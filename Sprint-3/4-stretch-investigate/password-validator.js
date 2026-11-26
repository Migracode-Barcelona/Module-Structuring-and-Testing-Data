function passwordValidator(password, passwords = []) {
  if (password.length < 5) {
    return false;
  }

  if (!/[A-Z]/.test(password)) {
    return false;
  }

  if (!/[a-z]/.test(password)) {
    return false;
  }

  if (!/[0-9]/.test(password)) {
    return false;
  }

  if (!/[!#$%.*&]/.test(password)) {
    return false;
  }

  if (passwords.includes(password)) {
    return false;
  }

  return true;
}

module.exports = passwordValidator;
