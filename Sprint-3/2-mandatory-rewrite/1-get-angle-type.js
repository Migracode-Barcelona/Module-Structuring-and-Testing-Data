// Implement a function getAngleType
// Build up your function case by case, writing tests as you go

function getAngleType(angle) {
  if (angle === 90) return "Right angle"; // Case 1
  if (angle < 90) return "Acute angle"; // Case 2
  if (angle > 90 && angle < 180) return "Obtuse angle"; // Case 3
  if (angle === 180) return "Straight angle"; // Case 4
  if (angle > 180 && angle < 360) return "Reflex angle"; // Case 5
}

module.exports = getAngleType;
