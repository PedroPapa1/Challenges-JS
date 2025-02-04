import { generateMatrix, printMatrix } from "../helper.js";

export function columnSumOfMatrix() {
  const rowCount = 15;
  const columnCount = 20;
  const columnCountArray = Array.from({ length: columnCount }, () => 0);

  const matrix = generateMatrix({
    rowCount,
    columnCount,
  });

  printMatrix(matrix);

  for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
      columnCountArray[columnIndex] += matrix[rowIndex][columnIndex];
    }
  }

  console.log("----------------------------");
  console.log(JSON.stringify(columnCountArray));
}
columnSumOfMatrix();
