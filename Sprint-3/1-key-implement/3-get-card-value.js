// This problem involves playing cards

function getCardValue(card) {
  const rank = card.slice(0, -1);

  if (rank === "A") return 11;
  else if (rank === "J" || rank === "Q" || rank === "K") return 10;
  else if (rank === "10") return 10;
  else if (rank >= "2" && rank <= "9") return Number(rank);
  else throw new Error("Invalid card rank.");
}

// we're going to use this helper function to make our assertions easier to read
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Case 1: Handle Ace
const aceofSpades = getCardValue("A♠");
assertEquals(aceofSpades, 11);

// Case 2: Handle Number Cards (2-9)
const fiveofHearts = getCardValue("5♥");
assertEquals(fiveofHearts, 5);

// Case 3: Handle Face Cards (J, Q, K)
const kingofDiamonds = getCardValue("K♦");
assertEquals(kingofDiamonds, 10);

const queenofHearts = getCardValue("Q♥");
assertEquals(queenofHearts, 10);

const jackofClubs = getCardValue("J♣");
assertEquals(jackofClubs, 10);

// Case 4: Handle Number 10
const tenofSpades = getCardValue("10♠");
assertEquals(tenofSpades, 10);

// Case 5: Handle Invalid Cards
function assertThrows(callback, targetError) {
  try {
    callback();
    console.assert(false, "Expected an error to be thrown");
  } catch (error) {
    assertEquals(error.message, targetError);
  }
}

assertThrows(() => getCardValue("X♠"), "Invalid card rank.");
