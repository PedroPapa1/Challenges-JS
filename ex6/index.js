const prompt = require("prompt-sync")({ sigint: true});

console.log("Insert side A: ");
const sideA = prompt(">");

console.log("Insert side B: ");
const sideB = prompt(">");

console.log("Insert side C: ");
const sideC = prompt(">");

 function verify() {
    const isSideAValid = sideA < sideB + sideC;
    const isSideBValid = sideB < sideA + sideC;
    const isSideCValid = sideC < sideA + sideB;

    if (isSideAValid && isSideBValid && isSideCValid) {
        return true;
    } 
        return false;     
}

function typeOfTriangle(){
    if (sideA === sideB && sideB === sideC) {
        console.log("It's a Equilateral triangle.");
    }else if (sideA === sideB || sideA === sideC || sideB === sideC) {
        console.log("It's a Isosceles triangle.");
    }else if (sideA !== sideB || sideB !==sideC) {
        console.log("It's a Scalene triangle.");
    }
}

if(verify()){
    typeOfTriangle();
}else {
    console.log("It's not a triangle.");
}