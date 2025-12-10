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
  const seen = new Set<number>();

  for (let cell of rowCells) {
    const value = Number(cell.value);

    if (!value) continue;
    if (value < 1 || value > 9) {
      return false;
    }
    if (seen.has(value)) {
      return false;
    }

    seen.add(value);
  }

  return true;
};

const valudateAllRows = function (): Boolean {
  for (let r = 0; r < 9; r++) {
    if (!validateRow(r)) {
      return false;
    }
  }
  return true;
};
