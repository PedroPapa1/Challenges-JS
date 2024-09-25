const prompt = require("prompt-sync")({ sigint: true});

const integerNumbers = [];
for (let i = 0; i < 4; i++) {
    console.log("Insert an integer number");
    const input = prompt(">");
    integerNumbers.push(parseInt(input));
}

const POSITION_ZERO = integerNumbers[0];
const POSITION_ONE = integerNumbers[1];
const POSITION_TWO = integerNumbers[2];
let POSITION_THREE = integerNumbers[3];

function calculate() {
    const resultPositionZero = POSITION_ZERO + 25;
    const resultPositionOne = POSITION_ONE * 3;
    const resultPositionTwo = (POSITION_TWO * 12) / 100;
    POSITION_THREE = POSITION_ZERO + POSITION_ONE + POSITION_TWO;

    console.log(resultPositionZero);
    console.log(resultPositionOne);
    console.log(resultPositionTwo);
    console.log(POSITION_THREE);
}

calculate();