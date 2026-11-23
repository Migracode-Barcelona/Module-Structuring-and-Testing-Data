const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

test("should return the numeric value for number cards (2-10)", () => {
  expect(getCardValue("5♥")).toEqual(5);
});

test("should return 10 for face cards (J, Q, K)", () => {
  expect(getCardValue("K♣")).toEqual(10);
});

test("should return 11 for Ace (A)", () => {
  expect(getCardValue("A♦")).toEqual(11);
});

test("should throw an error for invalid card ranks", () => {
  expect(() => getCardValue("1♠")).toThrow("Invalid card rank.");
});
