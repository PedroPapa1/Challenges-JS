import { generateMatrix, printMatrix } from "../helper.js";
import promptSync from "prompt-sync";

const prompt = promptSync();

export function matrixAndScalarMultiplication() {
  const rowCount = 6;
  const columnCount = 6;
  const vectorV = [];

  const matrix = generateMatrix({
    rowCount,
    columnCount,
  });

  console.log("Insert an integer number.");
  const multiplier = parseInt(prompt(">"));

  printMatrix(matrix);

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    vectorV[rowIndex] = [];
    for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
      vectorV[rowIndex][columnIndex] =
        matrix[rowIndex][columnIndex] * multiplier;
    }
  }

  console.log("--------------------");
  console.log("Vector V:");
  printMatrix(vectorV);
}
matrixAndScalarMultiplication();
