import promptSync from "prompt-sync";
const prompt = promptSync();

const ARRAY_NUMBERS = 6;

export function arrayOperationsBasedOnIdentifier() {
  const numbersForOperations = [];

  for (let arrayIndex = 0; arrayIndex < ARRAY_NUMBERS; arrayIndex++) {
    console.log(`Insert ${ARRAY_NUMBERS} integer numbers (${arrayIndex + 1}).`);
    const numbersOfArray = parseInt(prompt(">"));
    numbersForOperations.push(numbersOfArray);
  }

  const sumOfAllElements = numbersForOperations.reduce((accumulator, currentValue) => accumulator + currentValue);
  console.log(`The sum of elements: ${sumOfAllElements}`);

  const productOfAllElements = numbersForOperations.reduce((accumulator, currentValue) => accumulator * currentValue);
  console.log(`The product of elements: ${productOfAllElements}`);

  const averageOfAllElements = sumOfAllElements / numbersForOperations.length;
  console.log(`The average of elements: ${averageOfAllElements.toFixed(2)}`);

  const sortedElements = numbersForOperations.toSorted((a, b) => {
    return a - b;
  });
  console.log(`The elements in ascending order: ${sortedElements}`);

  console.log(`The numbers of your array: ${numbersForOperations}`);
}
arrayOperationsBasedOnIdentifier();
