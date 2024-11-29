import { generateMatrix, printMatrix } from "../helper.js";

function secondaryDiagonal({ matrix, rowCount }) {
  let diagonalSum = matrix.reduce((sum, row, index) => {
    return sum + row[rowCount - 1 - index];
  }, 0);
  diagonalSum /= rowCount;

  return diagonalSum.toFixed(2);
}

export function diagonalMultiplicationBySecondaryMean() {
  const rowCount = 3;
  const columnCount = 3;
  const numbersMultipliedBySecondaryMean = [];

  const matrix = generateMatrix({
    rowCount,
    columnCount,
  });

  printMatrix(matrix);
  console.log("---------------");

  const secondaryDiagonalMean = secondaryDiagonal({
    matrix,
    rowCount,
  });

  for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
    let result;
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
      if (columnIndex === rowIndex) {
        result = matrix[rowIndex][columnIndex] * secondaryDiagonalMean;
      }
    }
    numbersMultipliedBySecondaryMean.push(result.toFixed(2));
  }

  console.log(`The secondary diagonal mean: ${secondaryDiagonalMean}`);
  console.log("The multiplication of each number on the main diagonal by secondary diagonal mean:");
  console.log(JSON.stringify(numbersMultipliedBySecondaryMean));
}
diagonalMultiplicationBySecondaryMean();
