const prompt = require("prompt-sync")({ sigint: true});

const NUMBERS_TO_COLLECT = 5; 

function multiplicationTable () {
    for (let inputNumber = 0; inputNumber < NUMBERS_TO_COLLECT; inputNumber++) {
        console.log("Insert an integer number:");
        const currentNumber = Number(prompt(">"));

        for (let multiplier = 1; multiplier <= currentNumber; multiplier++) {
            const result = multiplier * currentNumber;
            console.log(`${multiplier} x ${currentNumber} = ${result}`);
        }
        console.log("--------------------");
    }
}

multiplicationTable();