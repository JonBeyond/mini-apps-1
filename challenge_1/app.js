// EVENT LISTENERS:

var board = [];
var inputs = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
var currentPlayer = 1; //x
var playIcon = 'X'; //1

/****** CONTROLLER FUNCTIONS & GAME INITIALIZATION ******/
var initialize = function() {
    console.log("initializing game");
    board = [['','',''],['','',''],['','','']];

    let eventListeners = []; //remove all previous listeners and generare new listeners
    inputs.forEach(move => {
        eventListeners.push(document.getElementById(move).addEventListener("click", (event) => {
            let move = event.path[0].outerHTML.match(/id="\w*/)[0].substring(4); //store id tag
            let checkboxOrigin = document.getElementById(move); //store checkbox element
            let moveChar = null;
            if (currentPlayer === 1) moveChar = 'X';
            else moveChar = 'O';

            checkboxOrigin.style.display = "none"; //hide checkbox
            document.getElementById((move+'play')).innerHTML = moveChar;
        //and lastly, send the move to the move processor:
            let moveID = inputs.indexOf(move);
            processMove(moveID); //process move
        }));
    });

}


/****** STATE UPDATER (THE GAME BOARD) ******/
var processMove= (move) => {
    //set this move
    board[~~(move/3)][move%3] = currentPlayer;

    //switch players
    if (currentPlayer === 1) {
        currentPlayer = -1;
        playIcon = "O";
    } else {
        currentPlayer = 1;
        playIcon = "X";
    }

    //process the board to check for a winner;
    processBoard();
}

var processBoard = () => {
    //check for a win
    //if the sum of any given row, column, or diagnal is 3, then X wins, if it is -3, then O wins.

    for (let i = 0; i < 3; i++) {
        let rowSum = 0;
        for (let j = 0; j < 3; j++) {
            rowSum += board[i][j];
            checkWin(rowSum);
        }
    }

    for (let i = 0; i < 3; i++) {
        let colSum = 0;
        for (let j = 0; j < 3; j++) {
            colSum += board[j][i];
            checkWin(colSum);
        }
    }

    let diag1 = board[0][0] + board[1][1] + board[2][2];
    checkWin(diag1);
    let diag2 = board[0][2] + board[1][1] + board[2][0];
    checkWin(diag2);
}

var checkWin = (val) => {
    if (val === 3) {
        console.log("X has won!");
    } else if (val === -3) {
        console.log("Y has won!");
    }

}

//LETS GO!
initialize();