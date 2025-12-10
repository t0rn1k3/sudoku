const gameCont = document.querySelector(".game-container") as HTMLDivElement;
const checkButton = document.querySelector(
  ".check-button"
) as HTMLButtonElement;

for (let row = 0; row < 9; row++) {
  for (let col = 0; col < 9; col++) {
    const cell = document.createElement("input");
    cell.classList.add("cell");
    cell.dataset.row = String(row);
    cell.dataset.col = String(col);
    cell.dataset.blok = String(Math.floor(row / 3) * 3 + Math.floor(col / 3));
    cell.type = "number";
    cell.maxLength = 1;

    gameCont.appendChild(cell);
  }
}

const validateRow = function (rowIndex: number) {
  const rowCells = document.querySelectorAll<HTMLInputElement>(
    `.cell[data-row="${rowIndex}"]`
  );
  console.log(rowCells);
};

validateRow(0);
