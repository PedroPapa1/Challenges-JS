import promptSync from 'prompt-sync';
const prompt = promptSync();


const integerNumbers = [];
for (let i = 0; i < 4; i++) {
    console.log("Insert an integer number");
    const input = prompt(">");
    integerNumbers.push(parseInt(input));
}

function calculate() {
    const resultPositionZero = integerNumbers[0] + 25;
    const resultPositionOne = integerNumbers[1] * 3;
    const resultPositionTwo = (integerNumbers[2] * 12) / 100;
    const resultPositionThree = integerNumbers[0] + integerNumbers[1] + integerNumbers[2];

    console.log(resultPositionZero);
    console.log(resultPositionOne);
    console.log(resultPositionTwo);
    console.log(resultPositionThree);
}

calculate();
