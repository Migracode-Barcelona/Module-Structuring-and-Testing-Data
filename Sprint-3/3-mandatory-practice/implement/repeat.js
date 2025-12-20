// Implement a function repeat
function repeat(str, count) {
  if (count < 0) {
    throw new Error("Invalid count"); // выбрасываем ошибку для отрицательного count
  }
  return str.repeat(count); // встроенный метод повторяет строку count раз
}

module.exports = repeat; // правильно экспортируем функцию
