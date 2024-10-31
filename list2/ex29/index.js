import { generateMatrix, printMatrix } from "../helper.js";

export function matrixRowAndColumnSums() {
  const rowCount = 4;
  const columnCount = 4;

  const sumOf = {
    fourthRow: [],
    secondColumn: [],
    mainDiagonal: [],
    allElements: [],
  };

  const matrix = generateMatrix({
    rowCount,
    columnCount,
  });
}
