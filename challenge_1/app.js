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
    //console.log(`Processing move for ${currentPlayer} at position ${move}`);
    //console.log(`Target: [${~~(move/3)}, ${move%3}]`);

    //set move:
    board[~~(move/3)][move%3] = currentPlayer;

    //switch player
    if (currentPlayer === 1) {
        currentPlayer = -1;
        playIcon = "O";
    } else {
        currentPlayer = 1;
        playIcon = "X";
    }

    //check for victor;
    //if so, disable all buttons and wait for new game
    console.log(`board is now: ${JSON.stringify(board)})`);
    processBoard();
}

var processBoard = () => {
    //check for a win

}

var displayBoard = (move) => {
    document.getElementById(move).HTML = 'X';
}



//LETS GO!
initialize();