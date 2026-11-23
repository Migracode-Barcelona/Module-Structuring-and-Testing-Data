function getCardValue(card) {
  const rank = card.slice(0, -1);
  if (rank === "A") return 11;
  if (["10", "J", "Q", "K"].includes(rank)) return 10;
  if (["2", "3", "4", "5", "6", "7", "8", "9"].includes(rank)) return Number(rank);
  throw new Error("Invalid card rank.");
}
module.exports = getCardValue;