var col = 4,
    row = 4;
var boardSize = col * row;
var scoreToWin = boardSize / 2;
var currentScore;
var deskWrapper = document.getElementById('wrapper');
//var mainDesk = document.getElementById('board');

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
    var newDesk = document.createElement('div');
    newDesk.id = "board";
    deskWrapper.appendChild(newDesk);

    for (var i = 0; i < 2; i++) {
        for (var currentTilesCount = 0; currentTilesCount < scoreToWin; currentTilesCount++) {
            var newTile = document.createElement('div');
            newTile.className = "board_tile";
            newTile.id = "tile" + currentTilesCount;
            newTile.setAttribute('confirmation', false);
            newTile.style.backgroundColor = tilesBackgrounds[currentTilesCount];
            newDesk.appendChild(newTile);
        }
    }
    startButton.disabled = true;

}
startButton.addEventListener("click", buildDesk);