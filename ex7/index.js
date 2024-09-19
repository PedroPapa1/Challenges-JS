const prompt = require("prompt-sync")({ sigint: true});

console.log("Insert the number of apples purchased:");
const apples = Number(prompt(">"));

function shop() {
    const DEFAULT_PRICE = 0.3
    const DISCOUNT_PRICE = 0.25

    if (apples < 12) {
        const finalPrice = (apples * DEFAULT_PRICE).toFixed(2);
        return (`Your purchase will cost $${finalPrice} dollars.`);
    } 
    else {
        const discountFinalPrice = (apples * DISCOUNT_PRICE).toFixed(2);
        return (`Congrats!! You have a discount, your purchase will cost $${discountFinalPrice} dollars.`);
    }
}

console.log(shop());