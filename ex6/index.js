const prompt = require("prompt-sync")({ sigint: true});

console.log("Insert side A: ");
const sideA = Number(prompt(">"));

console.log("Insert side B: ");
const sideB = Number(prompt(">"));

console.log("Insert side C: ");
const sideC = Number(prompt(">"));

 function checkIfItIsATriangle() {
    const isSideAValid = sideA < sideB + sideC;
    const isSideBValid = sideB < sideA + sideC;
    const isSideCValid = sideC < sideA + sideB;

    return isSideAValid && isSideBValid && isSideCValid  
}

function verifyTypeOfTriangle(){
    if (sideA === sideB && sideB === sideC) {
        console.log("It's an Equilateral triangle.");
    } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
        console.log("It's an Isosceles triangle.");
    } else {
        console.log("It's an Scalene triangle.");
    }
}

if(checkIfItIsATriangle()){
    verifyTypeOfTriangle();
}else {
    console.log("It's not a triangle.");
}