import { generateMatrix, printMatrix } from "../helper.js";

export function matrixProductCalculation() {
  const rowCount = 3;
  const columnCount = 5;
  const matrixP = [];

  const matrixA = generateMatrix({
    rowCount,
    columnCount,
  });

  const matrixB = generateMatrix({
    rowCount,
    columnCount,
  });

  printMatrix(matrixA);
  console.log("---------X---------");
  printMatrix(matrixB);

  for (let i = 0; i < rowCount; i++) {
    matrixP[i] = [];
    for (let j = 0; j < columnCount; j++) {
      matrixP[i][j] = 0;
    }
  }

  for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
      matrixP[rowIndex][columnIndex] =
        matrixA[rowIndex][columnIndex] * matrixB[rowIndex][columnIndex];
    }
  }

  console.log("----------------------------");
  printMatrix(matrixP);
}
matrixProductCalculation();
