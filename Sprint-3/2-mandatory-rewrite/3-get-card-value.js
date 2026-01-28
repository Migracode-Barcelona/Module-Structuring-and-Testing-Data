function getCardValue(card) {
    const rank = card.slice(0, -1); // Extract rank by removing the last character (suit)
    if (rank === "A") return 11;
    if (["K", "Q", "J", "10"].includes(rank)) return 10;
    const numericValue = parseInt(rank, 10);
    if (numericValue >= 2 && numericValue <= 9) return numericValue;
   
    throw new Error("Invalid card rank.");  
    }
    
module.exports = getCardValue;