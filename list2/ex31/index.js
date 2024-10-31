import { generateMatrix, printMatrix } from "../helper.js";
import promptSync from "prompt-sync";

const prompt = promptSync();

function comparingNumber({ matrix, columnCount, rowCount, comparativeNumber }) {
  let equalComaparativeNumber = 0;
  const matrixFiltered = matrix;

  for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
      if (matrix[rowIndex][columnIndex] === comparativeNumber) {
        equalComaparativeNumber++;
        matrixFiltered[rowIndex][columnIndex] = null;
      }
    }
  }
  return { equalComaparativeNumber, matrixFiltered };
}

export function elementCountAndMatrixFiltering() {
  const rowCount = 30;
  const columnCount = 30;

  const matrix = generateMatrix({
    rowCount,
    columnCount,
  });

  printMatrix(matrix);
  console.log("---------------");

  console.log("Insert an INTEGER number.");
  const comparativeNumber = parseInt(prompt(">"));

  const { equalComaparativeNumber, matrixFiltered } = comparingNumber({
    matrix,
    columnCount,
    rowCount,
    comparativeNumber,
  });

  console.log(
    `There are ${equalComaparativeNumber} numbers equal to ${comparativeNumber} in the matrix.`
  );
  console.log(`The same matrix but without the number ${comparativeNumber}:`);
  printMatrix(matrixFiltered);
}
elementCountAndMatrixFiltering();
