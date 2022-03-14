function highlight(table) {
  const names = [...table.tHead.rows[0].cells].map((item) => item.innerHTML);

  const genderId = names.findIndex((elem) => elem == "Gender");
  const ageId = names.findIndex((elem) => elem == "Age");
  const statusId = names.findIndex((elem) => elem == "Status");

  const tRows = Array.from(table.tBodies[0].rows);
  tRows.forEach((row) => {
    const tCells = Array.from(row.cells);
    tCells.forEach((cell) => {
      const i = cell.cellIndex;
      switch (i) {
        case statusId:
          if (cell.hasAttribute("data-available")) {
            row.classList.add(
              cell.dataset.available === "true" ? "available" : "unavailable"
            );
          } else {
            row.hidden = true;
          }
        case genderId:
          row.classList.add(cell.innerHTML === "m" ? "male" : "female");
        case ageId:
          if (parseInt(cell.innerHTML) < 18) {
            row.style.textDecoration = "line-through";
          }
      }
    });
  });
}
