const prompt = require("prompt-sync")({ sigint: true});

console.log("Insert the number of apples purchased:");
const apples = Number(prompt(">"));

function shop() {
    if (apples < 12) {
        let applesLess = (apples * 0.30);
        applesLess = applesLess.toFixed(2);
        return (`Your purchase will cost $${applesLess} dollars.`);
    } 
    if (apples >= 12) {
        let applesMore = (apples * 0.25);
        applesMore = applesMore.toFixed(2);
        return (`Congrats!! You have a discount, your purchase will cost $${applesMore} dollars.`);
    }
}

console.log(shop());