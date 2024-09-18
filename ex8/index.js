const prompt = require("prompt-sync")({ sigint: true});

console.log("Insert the first value:");
const valueOne = Number(prompt(">"));

console.log("Insert the second value:");
const valueTwo = Number(prompt(">"));

function verify() {
    if ( valueOne === valueTwo) {
        return ("The values can't be the same.");
    }

    if(valueOne < valueTwo) {
        console.log(`The values in ascending order: ${valueOne}, ${valueTwo}`);
    } else {
        console.log(`The values in ascending order: ${valueTwo}, ${valueOne}`);
    }
}

console.log(verify());