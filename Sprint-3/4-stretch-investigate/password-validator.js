// Validate passwords according to the following rules:
// - Minimum length: 5
// - At least one uppercase letter
// - At least one lowercase letter
// - At least one number
// - At least one special character from ! # $ % . * &

function passwordValidator(password) {
  if (typeof password !== "string") return false;

  // Check minimum length
  if (password.length < 5) return false;

  // Check for uppercase letter
  if (!/[A-Z]/.test(password)) return false;

  // Check for lowercase letter
  if (!/[a-z]/.test(password)) return false;

  // Check for digit
  if (!/[0-9]/.test(password)) return false;

  // Check for special character
  if (!/[!#$%.*&]/.test(password)) return false;

  // All rules passed
  return true;
}

module.exports = passwordValidator;
