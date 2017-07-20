var col = 4,
    row = 4;
var boardSize = col * row;
var scoreToWin = boardSize / 2;
var mainBoard = document.getElementById('board');
var startButton = document.querySelector('#startButton');
var resetButton = document.querySelector('#resetButton');

var tilesBackgrounds = [
    "green",
    "blue",
    "red",
    "yellow",
    "purple",
    "orange",
    "aqua",
    "cadetblue",
    "chartreuse"
];

/*
 * FUNCTION BUILD PLAYING PLACE
 */
function buildDesk() {
    for (var i = 0; i < 2; i++) {
        for (var currentTilesCount = 0; currentTilesCount < scoreToWin; currentTilesCount++) {
            var newTile = document.createElement('div');
            newTile.className = "board_tile";
            newTile.id = "tile" + currentTilesCount;
            newTile.setAttribute('confirmation', false);
            newTile.style.backgroundColor = tilesBackgrounds[currentTilesCount];
            mainDesk.appendChild(newTile);
        }
    }
    startButton.disabled = true;

}