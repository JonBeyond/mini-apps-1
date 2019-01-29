/*************************************************************************************/
/************************* GLOBAL STATE & STATE MANIPULATION *************************/
/*************************************************************************************/

    var game = {
        targetIDs: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
        board: [],
        score: {'x': 0,'o': 0, 'ties': 0},
        playIcon: 'X',
        prevWinner: 'X',
        wasTie: false,
        complete: false,
        moves: [],
        isValid: move => !game.moves.includes(move),
        placeMove: move => {
            game.moves.push(move); //add the move to lock out that move
            DOM.renderMove(move);
            let lastMove = game.moves.slice(-1)[0];
            let moveVal = game.targetIDs.indexOf(lastMove);

            let playerVal = null;
            if (game.playIcon === 'X') {
                playerVal = 1;
            } else {
                playerVal = -1;
            }

            game.board[~~(moveVal/3)][moveVal%3] = playerVal;
        },
        nextPlayer: () => {
            if (game.playIcon === 'X') {
                game.playIcon = 'O';
            } else {
                game.playIcon = 'X';
            }

        },
        checkWin: val => {
            if (val === 3) {
                game.processWin('X');
                return true;
            }
            else if (val === -3) {
                game.processWin('O');
                return true;
            }
            else if (val === null) {
                game.processWin(null);
                return true;
            }
        },
        processWin: winner => {
            game.moves = game.moves.concat(game.targetIDs);  //prevent further moves
            game.complete = true;

            if (winner === null) {
                game.wasTie = true;
                game.score.ties++;
            } else if (winner === 'O') {
                game.prevWinner = 'O';
                game.score.o++;
            } else if (winner === 'X') {
                game.prevWinner = 'X';
                game.score.x++;
            }
        },
        processBoard: () => { //brute force all combinations
            for (let i = 0; i < 3; i++) {
                let rowSum = 0;
                for (let j = 0; j < 3; j++) {
                    rowSum += game.board[i][j];
                    if (game.checkWin(rowSum)) return;
                }
            }
            for (let i = 0; i < 3; i++) {
                let colSum = 0;
                for (let j = 0; j < 3; j++) {
                    colSum += game.board[j][i];
                    if (game.checkWin(colSum)) return;
                }
            }
            let diag1 = game.board[0][0] + game.board[1][1] + game.board[2][2];
            let diag2 = game.board[0][2] + game.board[1][1] + game.board[2][0];

            if (game.checkWin(diag1)) return;
            if (game.checkWin(diag2)) return;

            if (game.moves.length === 9) {
                game.checkWin(null);
            }
        },
        resetState: () => {
            game.wasTie = false;
            game.complete = false;
            game.board = [['','',''],['','',''],['','','']];
            game.moves = [];
            //swap starter player to the loser
            if (game.prevWinner === 'X') {
                game.playIcon = "O";
            } else {
                game.playIcon = "X";
            }
            DOM.fullUpdate(true); //true forces a full reset of the board.
        }
    }
/*************************************************************************************/
/********************* CONTROLLER / LISTENERS & GAME INITIALIZATION ******************/
/*************************************************************************************/

    var initialize = function() {
        game.resetState();

        document.getElementById('gameBoard').addEventListener("click", (event) => {
            let move = event.target.id;
            if (game.isValid(move)) {
                game.placeMove(move);
                game.processBoard();
                game.nextPlayer();
                DOM.fullUpdate();
            }
        })

        document.getElementById('resetGame').addEventListener("click", () => {game.resetState();});
    }

/*************************************************************************************/
/******************************** VIEWER / DOM RENDER ********************************/
/*************************************************************************************/


var DOM = {
    fullUpdate: (fullReset) => {
        if (fullReset) {
            game.targetIDs.forEach((move) => {document.getElementById(move).innerHTML = ''});
            document.getElementById('resetGame').disabled = true;
        }

        let newScoreText = `Current Score (X - O - Ties): ${game.score.x} - ${game.score.o} - ${game.score.ties}`;
        let newStatusText = `It is ${game.playIcon}'s turn! Select a position below:`;
        document.getElementById('score').innerHTML = newScoreText;
        document.getElementById('status').innerHTML = newStatusText;

        if (game.complete) {
            document.getElementById('resetGame').disabled = false;
            let gameResult = (game.wasTie ? `Tie game! No winners or losers!` : `${game.prevWinner} has won!`);
            let nextPlayer = `${(game.prevWinner === 'X') ? 'O' : 'X'} will go first next game!`;
            document.getElementById('status').innerHTML = (gameResult + ' ' + nextPlayer);
        }
    },
    renderMove: (move) => {
        document.getElementById(move).innerHTML = game.playIcon;
    }
}

/*************************************************************************************/
/*********************************** GAME KICKOFF!! **********************************/
/*************************************************************************************/


//LETS GO!
initialize();