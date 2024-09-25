const prompt = require("prompt-sync")({ sigint: true});

const numbersToAscending = []
let input;

while( input !== 0) {
    console.log("Insert an integer number (use 0 to stop de loop):");
    input = Number(prompt(">"));

    if (input !== 0) {
        numbersToAscending.push(input);
    }
}

function sortNumbers() {
   const numbersInOrder = numbersToAscending.sort((a, b) => a - b);
   console.log(numbersInOrder);
}

sortNumbers();