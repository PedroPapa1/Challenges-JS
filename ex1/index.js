const prompt = require("prompt-sync")({ sigint: true});

console.log("Insert degrees Celsius");
const degreesCelsius = prompt(">");
const calculate = (degreesCelsius * 9 / 5) + 32;

console.log(`In Fahrenheit will be ${calculate} degrees`);