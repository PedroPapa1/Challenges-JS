const prompt = require("prompt-sync")({ sigint: true});

console.log("Insert the number of voters:");
const voters = Number(prompt(">"));

console.log("Insert the number of invalid votes:");
const invalidVotes = Number(prompt(">"));

console.log("Insert the number of blank votes:");
const blankVotes = Number(prompt(">"));

console.log("Insert the number of valid votes:");
const validsVotes = Number(prompt(">"));

function percentage(partialValue, totalValue) {
   return (100 * partialValue) / totalValue;
} 

console.log(percentage(invalidVotes, voters) + "% of null votes.");
console.log(percentage(blankVotes, voters) + "% of blank votes.");
console.log(percentage(validsVotes, voters) + "% of valid votes.");