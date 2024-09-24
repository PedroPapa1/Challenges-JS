const prompt = require("prompt-sync")({ sigint: true});

console.log("Insert an integer number.");
const value = parseInt(prompt(">"));

while (value > 0) {
    const divisor = 2;

    if (value % divisor === 0 ) {
        console.log(`${value} is an even number.`);
    }else {
        console.log(`${value} is an odd number.`);
    }

    console.log("-----------------------------");
    console.log("Insert the next integer number.");
    value = Number(prompt(">"));
}

console.log("You need to use a integer number! Try again.");