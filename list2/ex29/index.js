import { generateMatrix, printMatrix } from "../helper.js";

function sumOfRow({ matrix, columnCount, rowIndex }) {
  let sum = 0;
  for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
    sum += matrix[rowIndex][columnIndex];
  }
  return sum;
}

function sumOfColumn({ matrix, rowCount, columnIndex }) {
  let sum = 0;
  for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    sum += matrix[rowIndex][columnIndex];
  }
  return sum;
}

function sumOfDiagonal({ matrix, rowCount, columnCount }) {
  let sum = 0;
  for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
      if (columnIndex === rowIndex) {
        sum += matrix[rowIndex][columnIndex];
      }
    }
  }
  return sum;
}

function sumOfAllMatrix({ matrix, rowCount, columnCount }) {
  let sum = 0;
  for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
      sum += matrix[rowIndex][columnIndex];
    }
  }
  return sum;
}

export function matrixRowAndColumnSums() {
  const rowCount = 5;
  const columnCount = 5;

  const matrix = generateMatrix({
    rowCount,
    columnCount,
  });

  printMatrix(matrix);

  const row = sumOfRow({
    matrix,
    columnCount,
    rowIndex: 3,
  });

  const column = sumOfColumn({
    matrix,
    rowCount,
    columnIndex: 1,
  });

  const diagonal = sumOfDiagonal({
    matrix,
    rowCount,
    columnCount,
  });

  const allElements = sumOfAllMatrix({
    matrix,
    rowCount,
    columnCount,
  });

  console.log("------------------");
  console.log(`The sum of row 4: ${row}`);
  console.log(`The sum of column 2: ${column}`);
  console.log(`The sum of the main diagonal: ${diagonal}`);
  console.log(`The sum of all elements of the matrix: ${allElements}`);
}
matrixRowAndColumnSums();
