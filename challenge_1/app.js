//Global variables
const inputs = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
var board = [];
var score = {'x': 0,'o': 0};
var currentPlayer = null; //1 or -1
var playIcon = null; //x or o
var totalMoves = null; //if 9, game is over (tie)

/****** CONTROLLER (LISTENERS) & GAME INITIALIZATION ******/
var initialize = function() {
    console.log("initializing app");
    reset();

    inputs.forEach(move => { //generate event listeners:
        document.getElementById(move).addEventListener("click", (event) => {
            totalMoves++;
            document.getElementById(move).style.display = 'none';           //hide checkbox
            document.getElementById((move+'play')).innerHTML = playIcon;    //display move
            let moveID = inputs.indexOf(move);                              //determine moveid
            processMove(moveID);                                            //process move
        });
    })

    document.getElementById('resetGame').addEventListener("click", () => {reset();});
}

var reset = function() {
    console.log("initializing new board");
    board = [['','',''],['','',''],['','','']];
    currentPlayer = 1;
    playIcon = 'X';
    totalMoves = 0;

    document.getElementById('status').innerHTML = "It is X's turn!";

    //disable new game button
    document.getElementById('resetGame').disabled = true;

    //reset all checkboxes and moves
    inputs.forEach((move) => {
        document.getElementById(move).style.display = 'block';
        document.getElementById(move).checked = false;
        document.getElementById(move+'play').innerHTML = '';
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
        document.getElementById('status').innerHTML = "It is O's turn!";
    } else {
        currentPlayer = 1;
        playIcon = "X";
        document.getElementById('status').innerHTML = "It is X's turn!";
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
    console.log(`totalMoves = ${totalMoves}`);

    if (totalMoves === 9) {
        checkWin(null);
    }
}

var checkWin = (val) => {
    if (val === 3) lockOutBoard('X');
    else if (val === -3) lockOutBoard('O');
    else if (val === null) lockOutBoard(null);
}

var lockOutBoard = (winner) => {
    //set the winner text
    let resultText = null;
    if (winner === null) {
        resultText = "The game was a tie!"
    } else if (winner === 'O') {
        resultText = "O has won!"
        score.o++;
    } else if (winner === 'X') {
        resultText = "X has won!"
        score.x++;
    }

    document.getElementById('status').innerHTML = resultText;
    //allow user to reset:
    document.getElementById('resetGame').disabled = false;

    //lock out all remaining buttons
    inputs.forEach((move) => {
        document.getElementById(move).style.display = "none";
    })

}

//LETS GO!
initialize();