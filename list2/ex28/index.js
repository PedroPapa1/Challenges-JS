import { generateMatrix, printMatrix } from "../helper.js";

export function SumOfElements() {
  const rowCount = 10;
  const columnCount = 10;
  let sumAbove = 0;
  let sumBelow = 0;

  const matrix = generateMatrix({
    rowCount,
    columnCount,
  });

  printMatrix(matrix);
  console.log("------------------");

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
      if (rowIndex < columnIndex) {
        sumAbove += matrix[rowIndex][columnIndex];
      } else if (rowIndex > columnIndex) {
        sumBelow += matrix[rowIndex][columnIndex];
      }
    }
  }

  console.log(`The sum of the elements above the main diagona: ${sumAbove}`);
  console.log(`The sum of the elements below the main diagona: ${sumBelow}`);
}
SumOfElements();
