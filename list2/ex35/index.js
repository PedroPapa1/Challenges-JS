import promptSync from "prompt-sync";
const prompt = promptSync();

const TOTAL_VALUES = 30;
const EVEN_DIVISOR = 2;
const MAX_SIZE_IN_ARRAY = 5;

function displayArray(type, arrayType) {
  console.log(`The ${type} content in array: ${JSON.stringify(arrayType)}`);
}

export function oddAndEvenSeparation() {
  let evenNumbers = [];
  let oddNumbers = [];

  for (let indexNumber = 0; indexNumber < TOTAL_VALUES; indexNumber++) {
    console.log(`Insert the value ${indexNumber + 1}:`);
    const value = parseInt(prompt(">"));

    if (value % EVEN_DIVISOR === 0) {
      evenNumbers.push(value);
      if (evenNumbers.length === MAX_SIZE_IN_ARRAY) {
        displayArray("even", evenNumbers);
        evenNumbers = [];
      }
    } else {
      oddNumbers.push(value);
      if (oddNumbers.length === MAX_SIZE_IN_ARRAY) {
        displayArray("odd", oddNumbers);
        oddNumbers = [];
      }
    }
  }

  if (evenNumbers.length > 0) {
    displayArray("even", evenNumbers);
  }
  if (oddNumbers.length > 0) {
    displayArray("odd", oddNumbers);
  }
}
oddAndEvenSeparation();
