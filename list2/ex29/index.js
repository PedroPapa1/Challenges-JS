import { generateMatrix, printMatrix } from "../helper.js";

const sumOf = {
  fourthRow: 0,
  secondColumn: 0,
  mainDiagonal: 0,
  allElements: 0,
};

function sumOfRow({ matrix, columnCount, rowIndex }) {
  for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
    sumOf.fourthRow += matrix[rowIndex][columnIndex];
  }
  return sumOf.fourthRow;
}

function sumOfColumn({ matrix, rowCount, columnIndex }) {
  for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    sumOf.secondColumn += matrix[rowIndex][columnIndex];
  }
  return sumOf.secondColumn;
}

function sumOfDiagonal({ matrix, rowCount, columnCount }) {
  for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
      if (columnIndex === rowIndex) {
        sumOf.mainDiagonal += matrix[rowIndex][columnIndex];
      }
    }
  }
  return sumOf.mainDiagonal;
}

function sumOfAllMatrix({ matrix, rowCount, columnCount }) {
  for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
      sumOf.allElements += matrix[rowIndex][columnIndex];
    }
  }
  return sumOf.allElements;
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
