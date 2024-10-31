import { generateMatrix, printMatrix } from "../helper.js";

export function rowAndColumnSumVectors() {
  const rowCount = 5;
  const columnCount = 5;
  const sumOfRow = [];
  const sumOfColumn = [];

  const matrix = generateMatrix({
    rowCount,
    columnCount,
  });

  printMatrix(matrix);

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    sumOfRow[rowIndex] = 0;
    for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
      sumOfRow[rowIndex] += matrix[rowIndex][columnIndex];
      if (!sumOfColumn[columnIndex]) {
        sumOfColumn[columnIndex] = 0;
      }
      sumOfColumn[columnIndex] += matrix[rowIndex][columnIndex];
    }
  }
  console.log("--------------------");
  console.log(`The sum of rows (SL): ${JSON.stringify(sumOfRow)}`);
  console.log(`The sum of columns (SC): ${JSON.stringify(sumOfColumn)}`);
}
rowAndColumnSumVectors();
