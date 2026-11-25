function getCardValue(card) {
  const rank = card.slice(0, -1);

  if (rank === "A") return 11;
  else if (rank === "J" || rank === "Q" || rank === "K") return 10;
  else if (rank === "10") return 10;
  else if (rank >= "2" && rank <= "9") return Number(rank);
  else throw new Error("Invalid card rank.");
}

module.exports = getCardValue;
