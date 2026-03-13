function getCardValue(card) {
    const rank = card.slice(0, 1); // Extract the rank part (excluding the suit emoji)
    if (rank === "A") return 11;
    if (rank === "J" || rank === "Q" || rank === "K" || rank === "1") return 10; // Handle 10 as well
    const numericValue = parseInt(rank);
    if (numericValue >= 2 && numericValue <= 9) return numericValue;
    throw new Error("Invalid card rank");
}
module.exports = getCardValue;