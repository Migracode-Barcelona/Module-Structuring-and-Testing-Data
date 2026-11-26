function repeat(str, count) {
  if (count < 0) {
    throw new Error("Count cannot be negative.");
  }

  let result = "";

  for (let i = 0; i < count; i++) {
    result = result + str;
  }

  return result;
}

module.exports = repeat;
