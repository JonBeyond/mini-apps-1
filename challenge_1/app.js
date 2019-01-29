/************************ GLOBAL STATE ************************/

    var game = {
        targetIDs: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
        board: [],
        score: {'x': 0,'o': 0, 'ties': 0},
        currentPlayer: 1,
        playIcon: 'X',
        startPlayer: 'X',
        prevWinner: null,
        wasTie: false,
        complete: false,
        moves: [],
        isValidMove: (move) => {
            return !game.moves.includes(move);
        }
    }

/******* CONTROLLER / LISTENERS & GAME INITIALIZATION *******/

    var initialize = function() {
        console.log("initializing app");
        reset();

        document.getElementById('gameBoard').addEventListener("click", (event) => {
            let move = event.path[0].outerHTML.match(/id="\w*/)[0].substring(4);
            if (game.isValidMove(move)) {
                game.moves.push(move); //add the move to prevent duplication
                document.getElementById(move).innerHTML = game.playIcon; //update the DOM ********* TODO: MOVE THIS OUT
                placeMove(); //dont need to send the move, we can access it in game.moves.
                processBoard(); //check for a winner
                nextPlayer(); //change player
                updateDOM(); //update DOM
            }
        })

        document.getElementById('resetGame').addEventListener("click", () => {reset();});
    }

/************************ BOARD RESET ************************/

var reset = function() {
    game.wasTie = false;
    game.complete = false;

    game.board = [['','',''],['','',''],['','','']];
    game.moves = [];
    game.targetIDs.forEach((move) => {document.getElementById(move).innerHTML = '';})

    //swap the start player ************** TODO: this should be done elsewhere
    if (game.prevWinner === 'X') {
        game.startPlayer = "O";
        game.currentPlayer = -1;
        game.playIcon = "O";
    } else { // TODO: this will create a loop of X players if no one ever wins.  Need to fix this later.
        game.startPlayer = "X";
        game.currentPlayer = 1;
        game.playIcon = "X";
    }

    //we've changed the current player, so we need to display that text.
    updateDOM();
}

/****************** DOM RENDER ******************/

var updateDOM = function() {
    //TODO: Update coloring apon a win.  This will also require a reset so it will be labor intensive.

    //score:
    document.getElementById('score').innerHTML = `Current Score (X - O - Ties): ${game.score.x} - ${game.score.o} - ${game.score.ties}`;
    //display whose turn it is:
    document.getElementById('status').innerHTML = `It is ${game.playIcon}'s turn! Select a position below:`; //*** TODO: DOM RENDER

    //display game result:
    if (game.complete) {
        document.getElementById('resetGame').disabled = false;
        if (game.wasTie) {
            document.getElementById('status').innerHTML = `Tie game! No winners or losers!`;
        } else {
            document.getElementById('status').innerHTML = `${game.prevWinner} has won!`;
        }
    }
}

/****************** STATE UPDATER (THE GAME BOARD) ******************/

var placeMove = () => {
    let lastMove = game.moves.slice(-1)[0];
    let move = game.targetIDs.indexOf(lastMove);
    game.board[~~(move/3)][move%3] = game.currentPlayer;
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

var processBoard = () => {
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

//LETS GO!
initialize();