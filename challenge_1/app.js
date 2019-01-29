/************************ GLOBAL STATE ************************/

    var game = {
        targetIDs: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
        board: [],
        score: {'x': 0,'o': 0, 'ties': 0},
        currentPlayer: 1,
        playIcon: 'X',
        prevWinner: null,
        wasTie: false,
        complete: false,
        moves: [],
        isValid: move => !game.moves.includes(move)
    }

/******* CONTROLLER / LISTENERS & GAME INITIALIZATION *******/

    var initialize = function() {
        resetState();

        document.getElementById('gameBoard').addEventListener("click", (event) => {
            let move = event.path[0].outerHTML.match(/id="\w*/)[0].substring(4);

            if (game.isValid(move)) {
                placeMove(move);
                processBoard();
                nextPlayer();
                updateDOM();
            }
        })

        document.getElementById('resetGame').addEventListener("click", () => {resetState();});
    }


/************************ VIEWER / DOM RENDER ************************/

var updateDOM = (fullReset) => {
    if (fullReset) {
        game.targetIDs.forEach((move) => {document.getElementById(move).innerHTML = ''});
        document.getElementById('resetGame').disabled = true;
    }

    document.getElementById('score').innerHTML = `Current Score (X - O - Ties): ${game.score.x} - ${game.score.o} - ${game.score.ties}`;
    document.getElementById('status').innerHTML = `It is ${game.playIcon}'s turn! Select a position below:`;

    if (game.complete) {
        document.getElementById('resetGame').disabled = false;
        document.getElementById('status').innerHTML = (game.wasTie ? `Tie game! No winners or losers!` : `${game.prevWinner} has won! ${(game.prevWinner === 'X') ? 'O' : 'X'} will go first next game!`);
    }
}

var renderMove = (move) => {
    document.getElementById(move).innerHTML = game.playIcon;
}

/************************ STATES ************************/

/************************ BOARD RESET ************************/

var resetState = function() {
    game.wasTie = false;
    game.complete = false;
    game.board = [['','',''],['','',''],['','','']];
    game.moves = [];
    //swap starter player to the loser
    if (game.prevWinner === 'X') {
        game.currentPlayer = -1;
        game.playIcon = "O";
    } else {
        game.currentPlayer = 1;
        game.playIcon = "X";
    }
    updateDOM(true); //true forces a full reset of the board.
}
var placeMove = (move) => {
    game.moves.push(move); //add the move to prevent duplication
    renderMove(move);
    let lastMove = game.moves.slice(-1)[0];
    let moveVal = game.targetIDs.indexOf(lastMove);
    game.board[~~(moveVal/3)][moveVal%3] = game.currentPlayer;
}

var nextPlayer = () => {
    if (game.currentPlayer === 1) {
        game.currentPlayer = -1;
        game.playIcon = "O";
    } else {
        game.currentPlayer = 1;
        game.playIcon = "X";
    }
}

var processBoard = () => { //brute force all combinations
    for (let i = 0; i < 3; i++) {
        let rowSum = 0;
        for (let j = 0; j < 3; j++) {
            rowSum += game.board[i][j];
            if (checkWin(rowSum)) return;
        }
    }
    for (let i = 0; i < 3; i++) {
        let colSum = 0;
        for (let j = 0; j < 3; j++) {
            colSum += game.board[j][i];
            if (checkWin(colSum)) return;
        }
    }
    let diag1 = game.board[0][0] + game.board[1][1] + game.board[2][2];
    let diag2 = game.board[0][2] + game.board[1][1] + game.board[2][0];

    if (checkWin(diag1)) return;
    if (checkWin(diag2)) return;

    if (game.moves.length === 9) {
        checkWin(null);
    }
}

var checkWin = (val) => {
    if (val === 3) {
        proccessWin('X');
        return true;
    }
    else if (val === -3) {
        proccessWin('O');
        return true;
    }
    else if (val === null) {
        proccessWin(null);
        return true;
    }
}

var proccessWin = (winner) => {
    game.moves = game.moves.concat(game.targetIDs);  //prevent further moves by adding all possible values into the array

    if (winner === null) {
        game.complete = true;
        game.wasTie = true;
        game.score.ties++;
    } else if (winner === 'O') {
        game.prevWinner = 'O';
        game.complete = true;
        game.score.o++;
    } else if (winner === 'X') {
        game.prevWinner = 'X';
        game.complete = true;
        game.score.x++;
    }
}


/************************ GAME KICKOFF ************************/

//LETS GO!
initialize();