import { generateRandomInteger } from "../helper.js";

const ARRAY_NUMBERS = 100;

export function compactArray() {
  const completeArray = [];

  for (let arrayIndex = 0; arrayIndex < ARRAY_NUMBERS; arrayIndex++) {
    completeArray.push(generateRandomInteger());
  }

  const compactArray = completeArray.filter((value) => value !== null && value > 0);

  console.log("Complete array with 100 numbers:");
  console.log(JSON.stringify(completeArray));
  console.log("--------------------");

  console.log("Compact array removing all negative values");
  console.log(JSON.stringify(compactArray));
}
compactArray();
