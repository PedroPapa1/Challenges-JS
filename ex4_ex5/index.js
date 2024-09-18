const prompt = require("prompt-sync")({ sigint: true});

console.log("Insert yout first grade:");
const firstGrade = prompt(">");

console.log("Insert yout second grade: ");
const secondGrade = prompt(">");


function result() {
    let sum = (Number(firstGrade) + Number(secondGrade)) / 2;

    if (sum >= 6.0) {
        console.log(`Your grade is ${sum} congrats you have been approved!!`);
    } else {
        console.log(`Your grade is ${sum} don't give up!`);
    }
}

console.log(result());