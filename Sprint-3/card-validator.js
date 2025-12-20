function validateCreditCard(number) {
  // Проверяем, что длина 16 и все символы — цифры
  if (!/^\d{16}$/.test(number)) return false;

  // Проверяем, что есть хотя бы две разные цифры
  if (new Set(number).size < 2) return false;

  // Проверяем, что последняя цифра чётная
  if (parseInt(number[15]) % 2 !== 0) return false;

  // Проверяем, что сумма всех цифр больше 16
  const sum = number.split("").reduce((acc, n) => acc + Number(n), 0);
  if (sum <= 16) return false;

  return true; // карта валидная
}

module.exports = validateCreditCard;
