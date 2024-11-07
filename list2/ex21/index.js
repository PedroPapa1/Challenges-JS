import promptSync from "prompt-sync";
const prompt = promptSync();

const WOMEN_WEIGHT_IDEAL_BASE = 62.1;
const WOMEN_WEIGHT_FORMULA = 44.7;
const MEN_WEIGHT_IDEAL_BASE = 72.7;
const MEN_WEIGHT_FORMULA = 58;
const GENDER_MALE = "M";
const GENDER_FEMALE = "F";

function idealWeightCalculation(height, gender) {
  let idealWeight;

  if (gender === GENDER_MALE) {
    idealWeight = MEN_WEIGHT_IDEAL_BASE * height - MEN_WEIGHT_FORMULA;
  } else if (gender === GENDER_FEMALE) {
    idealWeight = WOMEN_WEIGHT_IDEAL_BASE * height - WOMEN_WEIGHT_FORMULA;
  }

  return idealWeight;
}

export function idealWeightFunction() {
  console.log("What is the person gender? (Use M or F).");
  const genderPrompt = prompt(">").toUpperCase();

  if (![GENDER_MALE, GENDER_FEMALE].includes(genderPrompt)) {
    console.log("Insert a valid gender.");
    return;
  }

  console.log("What is the person height in meters ? (Use just float numbers).");
  const heightPrompt = parseFloat(prompt(">"));

  const finalWeight = idealWeightCalculation(heightPrompt, genderPrompt);
  console.log(`Your ideal weight is ${finalWeight.toFixed(2)}.`);
}
idealWeightFunction();
