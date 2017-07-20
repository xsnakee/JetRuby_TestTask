var col = 4,
    row = 4;
var boardSize = col * row;
var scoreToWin = boardSize / 2;
var currentScore = 0;
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
            var tileNameNumber = currentTilesCount + 1 + (8 * i);
            newTile.className = "board_tile";
            newTile.id = "tile" + tileNameNumber;
            newTile.setAttribute('confirmation', false);
            newTile.style.background = tilesBackgrounds[currentTilesCount];
            newDesk.appendChild(newTile);
        }
    }
    startButton.disabled = true;

}

/*
 * FUNCTION RESET PLAING PLACE
 */
function resetGame() {
    startButton.disabled = false;
    deskWrapper.innerHTML = "";
    currentScore = 0;
}
/*
 * FUNCTION GET TARTGET ID
 */
function getElementId(mass, target) {
    if ((!mass[0])) {
        mass[0] = target.id;
    } else if (mass[0] && !mass[1]) {
        mass[1] = target.id;
    } else if (mass[0] && mass[1]) {
        mass[0] = target.id;
        mass.pop();
    }
    return mass;
}


/*
 * FUNCTION CHECK TARGETS
 */
function checkTargets(mass) {
    if (mass[0] && mass[1]) {
        var firstTile = document.getElementById(mass[0]);
        var secondTile = document.getElementById(mass[1]);
        if (firstTile.style.background == secondTile.style.background) {
            firstTile.setAttribute('confirmation', true);
            secondTile.setAttribute('confirmation', true);
            currentScore++;
            return;
        } else {
            firstTile.classList.toggle('dark_tile');
            firstTile.setAttribute('confirmation', false);
            secondTile.classList.toggle('dark_tile');
            secondTile.setAttribute('confirmation', false);
        }
    };
    return;
}

/*
 *   FUNCTION IS MAKE CONGRATULATIONS
 */
function congratulations() {
    resetGame();
    var winBlock = document.createElement('div');
    winBlock.innerHTML = "CONGRATULATIONS";
    deskWrapper.appendChild(winBlock);
}
/*
 *   FUNCTION START GAME
 */
function startGame() {
    resetGame();
    var tileId = [];
    countOfTiles(tilesBackgrounds);
    buildDesk();
    board.addEventListener("click", function (event) {
        if (event.target.getAttribute('confirmation') == "true") return;
        event.target.classList.toggle('dark_tile');
        event.target.setAttribute('confirmation', true);
        getElementId(tileId, event.target);
        checkTargets(tileId);
        if (currentScore == scoreToWin) {
            congratulations();
        }
    });

}

startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", function () {
    resetGame();
});