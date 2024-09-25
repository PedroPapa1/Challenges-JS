const prompt = require("prompt-sync")({ sigint: true});

console.log("Insert a integer number:");
const integerNumber = parseInt(prompt(">"));

const NUMBER_OF_TIMES = 10;

function repeatNumbers() {
    for (let i = 0; i < NUMBER_OF_TIMES; i++) {
        console.log(integerNumber);
    }
}

repeatNumbers();