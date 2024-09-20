const prompt = require("prompt-sync")({ sigint: true});

const integerNumbers = [];
for (let i = 0; i < 4; i++) {
    console.log("Insert an integer number");
    const input = prompt(">");
    integerNumbers.push(parseInt(input));
}

function calculate() {

    integerNumbers[3] = integerNumbers[0] + integerNumbers[1] + integerNumbers[2]
    integerNumbers[0] = integerNumbers[0] + 25;
    integerNumbers[1] = integerNumbers[1] * 3;
    integerNumbers[2] = (integerNumbers[2] * 12) / 100;

    console.log(integerNumbers[0]);
    console.log(integerNumbers[1]);
    console.log(integerNumbers[2]);
    console.log(integerNumbers[3]);

}

calculate();