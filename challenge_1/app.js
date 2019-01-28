//Global variables
// const inputs = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
// var board = [];
// var score = {'x': 0,'o': 0};
// var currentPlayer = null; //1 or -1
// var playIcon = null; //x or o
// var totalMoves = null; //if 9, game is over (tie)


var gameState = {
    inputs: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
    board: [],
    score: {'x': 0,'o': 0},
    currentPlayer: null,
    playIcon: null,
    totalMoves: null,
    moveId: null
}



/****** CONTROLLER (LISTENERS) & GAME INITIALIZATION ******/
var initialize = function() {
    console.log("initializing app");
    reset();
    gameState.inputs.forEach(move => { //generate event listeners:
        document.getElementById(move).addEventListener("click", (event) => {
            gameState.totalMoves++;
            document.getElementById(move).style.display = 'none';           //hide checkbox
            document.getElementById((move+'play')).innerHTML = gameState.playIcon;    //display move
            gameState.moveID = gameState.inputs.indexOf(move);                              //determine moveid
            processMove();                                            //process move
        });
    })
    document.getElementById('resetGame').addEventListener("click", () => {reset();});
}

var reset = function() {
    console.log("initializing new board");

    //reset game state:
    gameState.board = [['','',''],['','',''],['','','']];
    gameState.currentPlayer = 1;
    gameState.playIcon = 'X';
    gameState.totalMoves = 0;

    //reset HTML
    document.getElementById('status').innerHTML = "It is X's turn! Select a position below:";
    document.getElementById('resetGame').disabled = true;
    gameState.inputs.forEach((move) => {
        document.getElementById(move).style.display = 'block';
        document.getElementById(move).checked = false;
        document.getElementById(move+'play').innerHTML = '';
    });
}


/****** STATE UPDATER (THE GAME BOARD) ******/
var processMove= () => {
    //set this move
    gameState.board[~~(gameState.moveID/3)][gameState.moveID%3] = gameState.currentPlayer;
    //switch players
    if (gameState.currentPlayer === 1) {
        gameState.currentPlayer = -1;
        gameState.playIcon = "O";
        document.getElementById('status').innerHTML = "It is O's turn! Select a position below:";
    } else {
        gameState.currentPlayer = 1;
        gameState.playIcon = "X";
        document.getElementById('status').innerHTML = "It is X's turn! Select a position below:";
    }

    //process the board to check for a winner;
    processBoard();
}

var processBoard = () => {
    //check for a win
    //if the sum of any given row, column, or diagnal is 3, then X wins, if it is -3, then O wins.
    let complete = false;
    for (let i = 0; i < 3; i++) {
        let rowSum = 0;
        for (let j = 0; j < 3; j++) {
            rowSum += gameState.board[i][j];
            if (checkWin(rowSum)) return;
        }
    }

    for (let i = 0; i < 3; i++) {
        let colSum = 0;
        for (let j = 0; j < 3; j++) {
            colSum += gameState.board[j][i];
            if (checkWin(colSum)) return;
        }
    }

    let diag1 = gameState.board[0][0] + gameState.board[1][1] + gameState.board[2][2];
    if (checkWin(diag1)) return;
    let diag2 = gameState.board[0][2] + gameState.board[1][1] + gameState.board[2][0];
    if (checkWin(diag2)) return;

    if (gameState.totalMoves === 9) {
        checkWin(null);
    }
}

var checkWin = (val) => {
    if (val === 3) {
        lockOutBoard('X');
        return true;
    }
    else if (val === -3) {
        lockOutBoard('O');
        return true;
    }
    else if (val === null) {
        lockOutBoard(null);
        return true;
    }
}

var lockOutBoard = (winner) => {
    //set the winner text
    let resultText = null;
    if (winner === null) {
        resultText = "The game was a tie!"
    } else if (winner === 'O') {
        resultText = "O has won!"
        gameState.score.o++;
    } else if (winner === 'X') {
        resultText = "X has won!"
        gameState.score.x++;
    }

    document.getElementById('score').innerHTML = `X has won ${gameState.score.x} and O has won ${gameState.score.o}`;

    document.getElementById('status').innerHTML = resultText;
    //allow user to reset:
    document.getElementById('resetGame').disabled = false;

    //lock out all remaining buttons
    gameState.inputs.forEach((move) => {
        document.getElementById(move).style.display = "none";
    })

}

//LETS GO!
initialize();