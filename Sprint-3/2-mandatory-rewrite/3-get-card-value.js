function getCardValue(card) {
  // replace with your code from key-implement
  const rank = card.slice(0, -1);
  if (rank === "A") return 11;
  if (rank === "J" || rank === "Q" || rank === "K" || rank === "10") return 10;
  const numericRank = Number(rank);
  if (numericRank >= 2 && numericRank <= 9) return numericRank;
  throw new Error("Invalid card rank.");
}
module.exports = getCardValue;
