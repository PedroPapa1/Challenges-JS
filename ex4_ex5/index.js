const prompt = require("prompt-sync")({ sigint: true});

console.log("Insert yout first grade:");
const firstGrade = prompt(">");

console.log("Insert yout second grade: ");
const secondGrade = prompt(">");


function gradeResult() {
    let sum = (Number(firstGrade) + Number(secondGrade)) / 2;
    const PASSING_GRADE = 6;

    if (sum >= PASSING_GRADE) {
        console.log(`Your grade is ${sum} congrats you have been approved!!`);
    } else {
        console.log(`Your grade is ${sum} don't give up!`);
    }
}

console.log(gradeResult());