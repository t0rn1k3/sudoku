var gameCont = document.querySelector(".game-container");
for (var row = 0; row < 9; row++) {
    for (var col = 0; col < 9; col++) {
        var cell = document.createElement("input");
        cell.classList.add("cell");
        gameCont.appendChild(cell);
    }
}
