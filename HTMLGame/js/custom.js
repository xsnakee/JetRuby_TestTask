var col = 4,
    row = 4;
var boardSize = col * row;
var scoreToWin = boardSize / 2;
var currentScore;
var deskWrapper = document.getElementById('wrapper');
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
 * FUNCTION IS CUT ARRAY OF COLORS
 */
function countOfTiles(mass) {

    if (scoreToWin < mass.length) {
        mass.splice(scoreToWin, mass.length - scoreToWin);
    }
    return mass;
}

/*
 * FUNCTION RANDOM SORT ALL ELEMENTS OF ARRAY
 */
function randomArraySort(mass) {
    var currentElementNumber, elementNumberToSwap, temp;
    currentElementNumber = mass.length;
    while (currentElementNumber) {
        elementNumberToSwap = Math.floor((currentElementNumber--) * Math.random());

        temp = mass[currentElementNumber];
        mass[currentElementNumber] = mass[elementNumberToSwap];
        mass[elementNumberToSwap] = temp;
    }
    return mass;
}

/*
 * FUNCTION BUILD PLAYING PLACE
 */
function buildDesk() {
    var newDesk = document.createElement('div');
    newDesk.id = "board";
    deskWrapper.appendChild(newDesk);

    for (var i = 0; i < 2; i++) {
        randomArraySort(tilesBackgrounds);
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

/*
 * FUCNTION RESET PLAING PLACE
 */
function resetGame() {
    deskWrapper.innerHTML = "";
    startButton.disabled = false;
}

/*
 * FUCNTION GET TARTGET ADDRESS
 */
function getElementId() {
    if ((!tileId[0]) || (tileId[0] && tileId[1])) {
        tileId[0] = event.target.id;
    } else if (tileId[0] && !tileId[1]) {
        tileId[1] = event.target.id;
    }
}

/*
 *   FUNCTION START GAME
 */
function startGame() {
    countOfTiles(tilesBackgrounds);
    buildDesk();
    board.addEventListener("click", function (event) {
        //if (taget.hasAttribute('confirmation')) return false;
        event.target.classList.toggle('dark_tile');
    });
    resetButton.addEventListener("click", resetGame);
}

startButton.addEventListener("click", startGame);