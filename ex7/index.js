const prompt = require("prompt-sync")({ sigint: true});

console.log("Insert the number of apples purchased:");
const apples = Number(prompt(">"));

const DEFAULT_PRICE = 0.30;
const DISCOUNT_PRICE = 0.25;
const DISCOUNT_QUANTITY = 12;

function shop() {
    if (apples < DISCOUNT_QUANTITY) {
        const finalPrice = (apples * DEFAULT_PRICE).toFixed(2);
        return (`Your purchase will cost $${finalPrice} dollars.`);
    } 
    if (apples >= DISCOUNT_QUANTITY) {
        const discountFinalPrice = (apples * DISCOUNT_PRICE).toFixed(2);
        return (`Congrats!! You have a discount, your purchase will cost $${discountFinalPrice} dollars.`);
    }
}

console.log(shop());