const gameCont = document.querySelector(".game-container") as HTMLDivElement;
const checkButton = document.querySelector(
  ".check-button"
) as HTMLButtonElement;

const solutionEasy: number[][] = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

const puzzleEasy: number[][] = [
  [5, 0, 0, 6, 0, 8, 0, 1, 0],
  [6, 0, 2, 0, 9, 0, 3, 0, 8],
  [0, 9, 0, 3, 0, 2, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 2, 0],
  [0, 2, 6, 0, 5, 0, 7, 0, 1],
  [7, 1, 0, 0, 0, 4, 0, 0, 6],
  [0, 0, 0, 5, 0, 7, 0, 8, 4],
  [0, 8, 0, 4, 0, 9, 6, 0, 5],
  [3, 0, 5, 0, 8, 0, 1, 7, 0],
];

for (let row = 0; row < 9; row++) {
  for (let col = 0; col < 9; col++) {
    const cell = document.createElement("input");
    cell.classList.add("cell");
    cell.dataset.row = String(row);
    cell.dataset.col = String(col);
    cell.dataset.blok = String(Math.floor(row / 3) * 3 + Math.floor(col / 3));
    cell.type = "number";
    cell.maxLength = 1;

    const cellValue = puzzleEasy[row]![col];

    if (cellValue !== 0) {
      cell.value = String(cellValue);
      cell.disabled = true;
      cell.classList.add("fixed");
    }

    gameCont.appendChild(cell);
  }
}

const validateRow = function (rowIndex: number) {
  const rowCells = document.querySelectorAll<HTMLInputElement>(
    `.cell[data-row="${rowIndex}"]`
  );
  const seen = new Set<number>();

  for (let cell of Array.from(rowCells)) {
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
