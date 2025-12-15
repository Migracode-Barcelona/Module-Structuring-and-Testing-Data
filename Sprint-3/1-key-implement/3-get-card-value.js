// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue
// the function takes a single parameter, a string representing a playing card
// the function should return the numerical value of the card
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically
// just make one change at a time -- don't rush -- programmers are deep and careful thinkers

function getCardValue(card) {
  // Extract rank by removing the last character (suit)
  const rank = card.slice(0, -1);

  // Ace
  if (rank === "A") return 11;

  // Face cards
  if (rank === "J" || rank === "Q" || rank === "K" || rank === "10") return 10;

  // Number cards
  const numericRank = Number(rank);
  if (numericRank >= 2 && numericRank <= 9) return numericRank;

  // Invalid card
  throw new Error("Invalid card rank.");
}

// Helper function for assertions
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Acceptance criteria:

// Ace of Spades
const aceofSpades = getCardValue("A♠");
assertEquals(aceofSpades, 11);

// Number Card: 5 of Hearts
const fiveofHearts = getCardValue("5♥");
assertEquals(fiveofHearts, 5);

// Face Card: King of Diamonds
const kingOfDiamonds = getCardValue("K♦");
assertEquals(kingOfDiamonds, 10);

// Face Card: Queen of Clubs
const queenOfClubs = getCardValue("Q♣");
assertEquals(queenOfClubs, 10);

// Number Card: 10 of Hearts
const tenOfHearts = getCardValue("10♥");
assertEquals(tenOfHearts, 10);

// Invalid Card: "1♠"
try {
  getCardValue("1♠");
  console.assert(false, "Expected an error for invalid card");
} catch (e) {
  console.assert(
    e.message === "Invalid card rank.",
    `Unexpected error: ${e.message}`
  );
}

// Invalid Card: "Z♣"
try {
  getCardValue("Z♣");
  console.assert(false, "Expected an error for invalid card");
} catch (e) {
  console.assert(
    e.message === "Invalid card rank.",
    `Unexpected error: ${e.message}`
  );
}
