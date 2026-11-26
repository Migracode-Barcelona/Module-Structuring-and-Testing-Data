const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
// Case 3: Handle Face Cards (J, Q, K):
// Case 4: Handle Ace (A):
// Case 5: Handle Invalid Cards:

//Answer:
const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
});

// Case 2: 
test("should return the number value for number cards", () => {
    expect(getCardValue("5♥")).toEqual(5);
    expect(getCardValue("10♦")).toEqual(10);
});

// Case 3: 
test("should return 10 for face cards", () => {
    expect(getCardValue("J♣")).toEqual(10);
    expect(getCardValue("Q♥")).toEqual(10);
    expect(getCardValue("K♠")).toEqual(10);
});

// Case 4: 
test("should return 11 for Ace of Hearts", () => {
    expect(getCardValue("A♥")).toEqual(11);
});

// Case 5: 
test("should throw an error for an invalid card rank", () => {
    expect(() => getCardValue("X♠")).toThrow("Invalid card rank.");
});