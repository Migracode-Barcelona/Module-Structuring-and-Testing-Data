const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10)
test("should return 5 for Five of Hearts", () => {
  const fiveofHearts = getCardValue("5♥");
  expect(fiveofHearts).toEqual(5);
});

test("should return 10 for Ten of Spades", () => {
  const tenofSpades = getCardValue("10♠");
  expect(tenofSpades).toEqual(10);
});

// Case 3: Handle Face Cards (J, Q, K)
test("should return 10 for Jack of Clubs", () => {
  expect(getCardValue("J♣")).toEqual(10);
});

test("should return 10 for Queen of Hearts", () => {
  expect(getCardValue("Q♥")).toEqual(10);
});

test("should return 10 for King of Diamonds", () => {
  expect(getCardValue("K♦")).toEqual(10);
});

// Case 4: Handle Ace (A)
test("should return 11 for Ace of Hearts", () => {
  expect(getCardValue("A♥")).toEqual(11);
});

// Case 5: Handle Invalid Cards
test("should throw an error for invalid card rank", () => {
  expect(() => getCardValue("X♠")).toThrow("Invalid card rank.");
});
