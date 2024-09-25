const prompt = require("prompt-sync")({ sigint: true});

console.log("Insert degrees Celsius");
const degreesCelsius = Number(prompt(">"));
const degreesInFahrenheit = (degreesCelsius * 9 / 5) + 32;

console.log(`In Fahrenheit will be ${degreesInFahrenheit} degrees`);