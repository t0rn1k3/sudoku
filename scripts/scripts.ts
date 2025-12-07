const gameCont = document.querySelector(".game-container") as HTMLDivElement;

for (let row = 0; row < 9; row++) {
  for (let col = 0; col < 9; col++) {
    const cell = document.createElement("input");
    cell.classList.add("cell");
    gameCont.appendChild(cell);
  }
}
