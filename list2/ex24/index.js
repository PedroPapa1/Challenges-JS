import { generateMatrix, printMatrix } from "../helper.js";

export function negativeElementsInMatrix() {
  const rowCount = 6;
  const columnCount = 8;
  const negativeCountArray = [];

  const matrix = generateMatrix({
    rowCount,
    columnCount,
  });

  printMatrix(matrix);

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    let count = 0;
    for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
      if (matrix[rowIndex][columnIndex] < 0) {
        count++;
      }
    }
    negativeCountArray.push(count);
  }
  console.log("----------------------------");
  console.log(negativeCountArray);
}
negativeElementsInMatrix();
