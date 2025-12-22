function getCardValue(card) {
    // replace with your code from key-implement
    return 11;
}
module.exports = getCardValue;

//ANSWER
function getCardValue(card) {
    const rank = card.slice(0, -1); // remove the last character (suit emoji)

    if (rank === "A") return 11;
    if (["J", "Q", "K", "10"].includes(rank)) return 10;
    
    const num = parseInt(rank);
    if (num >= 2 && num <= 9) return num;

    throw new Error("Invalid card rank.");
}

module.exports = getCardValue;