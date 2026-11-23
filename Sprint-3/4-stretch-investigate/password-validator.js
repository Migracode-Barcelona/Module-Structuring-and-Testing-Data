function passwordValidator(password, previousPasswords = []) {
  // Rule 1: Have at least 5 characters
  if (typeof password !== "string" || password.length < 5) {
    return false;
  }

  // Rule 2: Have at least one English uppercase letter (A-Z)
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Rule 3: Have at least one English lowercase letter (a-z)
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Rule 4: Have at least one number (0-9)
  if (!/[0-9]/.test(password)) {
    return false;
  }

  // Rule 5: Have at least one allowed symbol ("!", "#", "$", "%", ".", "*", "&")
  if (!/[!#$%.*&]/.test(password)) {
    return false;
  }

  // Rule 6: Must not be any previous password in the passwords array
  if (previousPasswords.includes(password)) {
    return false;
  }

  return true;
}


module.exports = passwordValidator;