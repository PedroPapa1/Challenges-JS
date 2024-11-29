import promptSync from "prompt-sync";
const prompt = promptSync();

const ARRAY_NUMBERS = 6;

function sumOfAllElements(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function productOfAllElements(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
}

function averageOfAllElements(numbers) {
  let sum = sumOfAllElements(numbers);
  sum /= numbers.length;
  return sum.toFixed(2);
}

function sortedElements(numbers) {
  return numbers.slice().sort((a, b) => a - b);
}

function displayMenu() {
  console.log("\n--------------MENU--------------");
  console.log("1. Sum of elements");
  console.log("2. Product of elements");
  console.log("3. Average of elements");
  console.log("4. Sort elements in ascending order");
  console.log("5. Display the array");
  console.log("0. Exit");
}

export function arrayOperationsBasedOnIdentifier() {
  const numbersForOperations = [];

  for (let arrayIndex = 0; arrayIndex < ARRAY_NUMBERS; arrayIndex++) {
    console.log(`Insert ${ARRAY_NUMBERS} integer numbers (${arrayIndex + 1}).`);
    const numbersOfArray = parseInt(prompt(">"));
    numbersForOperations.push(numbersOfArray);
  }

  let userChoice;
  do {
    displayMenu();
    userChoice = parseInt(prompt(">"));

    switch (userChoice) {
      case 1:
        console.log(`\n- The sum of elements: ${sumOfAllElements(numbersForOperations)}`);
        break;
      case 2:
        console.log(`\n- The product of elements: ${productOfAllElements(numbersForOperations)}`);
        break;
      case 3:
        console.log(`\n- The average of elements: ${averageOfAllElements(numbersForOperations)}`);
        break;
      case 4:
        console.log(`\n- The elements in ascending order: ${sortedElements(numbersForOperations)}`);
        break;
      case 5:
        console.log(`\n- The numbers of your array: ${numbersForOperations}`);
        break;
      case 0:
        console.log("- Exiting the program...");
        process.exit();
        break;
      default:
        console.log("- Please insert a valid option");
        break;
    }
  } while (userChoice != 0);
}
arrayOperationsBasedOnIdentifier();
