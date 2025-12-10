var gameCont = document.querySelector(".game-container");
var checkButton = document.querySelector(".check-button");
for (var row = 0; row < 9; row++) {
    for (var col = 0; col < 9; col++) {
        var cell = document.createElement("input");
        cell.classList.add("cell");
        cell.dataset.row = String(row);
        cell.dataset.col = String(col);
        cell.dataset.blok = String(Math.floor(row / 3) * 3 + Math.floor(col / 3));
        cell.type = "number";
        cell.maxLength = 1;
        gameCont.appendChild(cell);
    }
}
var validateRow = function (rowIndex) {
    var rowCells = document.querySelectorAll(".cell[data-row=\"".concat(rowIndex, "\"]"));
    console.log(rowCells);
};
validateRow(0);
