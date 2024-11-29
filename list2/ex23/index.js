const DIAGONAL_NUMBER = 1;
const FILLING_NUMBER = 0;
const ROW_BY_COLUMN = 7;

export function identityMatrix() {
  const matrix = [];

  for (let column = 0; column < ROW_BY_COLUMN; column++) {
    const arrayOfRow = [];
    for (let arrayPosition = 0; arrayPosition < ROW_BY_COLUMN; arrayPosition++) {
      if (column === arrayPosition) {
        arrayOfRow.push(DIAGONAL_NUMBER);
      } else {
        arrayOfRow.push(FILLING_NUMBER);
      }
    }
    matrix.push(arrayOfRow);
  }
  matrix.forEach((row) => {
    console.log(JSON.stringify(row));
  });
}
identityMatrix();
