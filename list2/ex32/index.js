import { generateMatrix, printMatrix } from "../helper.js";

export function matrixRowNormalization() {
  const rowCount = 12;
  const columnCount = 13;

  const matrix = generateMatrix({
    rowCount,
    columnCount,
  });

  printMatrix(matrix);
  console.log("---------------");

  function newMatrix({ matrix, rowCount, columnCount }) {
    const modifiedMatrix = matrix.map((row) => [...row]);

    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
      const biggestValue = Math.max(...modifiedMatrix[rowIndex]);

      if (biggestValue === 0) {
        console.log(`Row ${rowIndex + 1} contains only zeros.`);
      } else {
        console.log(`The largest absolute value in row ${rowIndex + 1}: ${biggestValue}`);
      }

      for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
        modifiedMatrix[rowIndex][columnIndex] = Math.round((matrix[rowIndex][columnIndex] / biggestValue) * 100) / 100;
      }
    }
    return modifiedMatrix;
  }

  const modifiedMatrix = newMatrix({
    matrix,
    rowCount,
    columnCount,
  });

  console.log("Modified matrix:");
  printMatrix(modifiedMatrix);
}
matrixRowNormalization();
