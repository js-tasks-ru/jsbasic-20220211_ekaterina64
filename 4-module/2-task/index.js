function makeDiagonalRed(table) {
  let tRows = Array.from(table.rows);
  tRows.forEach(row => {
    let tCells = Array.from(row.cells);
    tCells.forEach(cell => {
      if (row.rowIndex === cell.cellIndex) {
        cell.style.backgroundColor = 'red';
      }
    });
  });
}
