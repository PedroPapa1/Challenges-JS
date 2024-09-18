const prompt = require("prompt-sync")({ sigint: true});

console.log("Insert the number of voters:");
const voters = prompt(">");

console.log("Insert the number of invalid votes:");
const invalidVotes = prompt(">");

console.log("Insert the number of blank votes:");
const blankVotes = prompt(">");

console.log("Insert the number of valid votes:");
const validsVotes = prompt(">");

function percentage(partialValue, totalValue) {
   return (100 * partialValue) / totalValue;
} 

console.log(percentage(invalidVotes, voters) + "% de votos nulo.");
console.log(percentage(blankVotes, voters) + "% de votos em branco.");
console.log(percentage(validsVotes, voters) + "% de votos válidos.");