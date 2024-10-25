const DIAGONAL_NUMBER = 1;
const FILLING_NUMBER = 0;

export function identityMatrix() {
    function calculate(rowByColumn) {
      const matrix = [];

      for (let column = 0; column < rowByColumn; column++) {
        const arrayOfRow = [];
        for (let arrayPosition = 0; arrayPosition < rowByColumn; arrayPosition++) {
          if (column === arrayPosition) {
            arrayOfRow.push(DIAGONAL_NUMBER);
          } else {
            arrayOfRow.push(FILLING_NUMBER);
          }
        }
        matrix.push(arrayOfRow);
      }
      matrix.forEach(row => { 
        console.log(JSON.stringify(row));
      });  
  }
  calculate(7)
}
identityMatrix();