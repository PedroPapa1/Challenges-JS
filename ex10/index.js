const prompt = require("prompt-sync")({ sigint: true});

console.log("Insert a integer number:");
const num = Number(prompt(">"));

function repeat() {
    for (let i = 0; i < 10; i++)
        console.log(num);
}

console.log(repeat());