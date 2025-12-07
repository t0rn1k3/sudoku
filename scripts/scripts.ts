const gameCont = document.querySelector(".game-container") as HTMLDivElement;

for (let row = 0; row < 9; row++) {
  for (let col = 0; col < 9; col++) {
    const cell = document.createElement("input");
    cell.classList.add("cell");
    cell.dataset.row = String(row);
    cell.dataset.col = String(col);
    cell.dataset.blok = String(Math.floor(row / 3) * 3 + Math.floor(col / 3));
    cell.type = "text";
    cell.maxLength = 1;

    gameCont.appendChild(cell);
  }
}
