// EVENT LISTENERS:

var board = [];
var inputs = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
var currentPlayer = 1; //x


/****** CONTROLLER FUNCTIONS & GAME INITIALIZATION ******/
var initialize = function() {
    console.log("initializing game");
    let eventListeners = [];
    inputs.forEach(move => {
        eventListeners.push(document.getElementById(move).addEventListener("click", (event) => {
            //hide this button
            //pull out the button that was clicked
            //send the button that was commited to the processMove function
            let move = event.path[0].outerHTML.match(/id="\w*/)[0].substring(4);
            //disable the button here
            let target = document.getElementById(move);
            target.style.display = "none";

            let moveID = inputs.indexOf(move);
            processMove(moveID); //process move

            //update move here


        }))
    })

    board = [
             ['','',''],
             ['','',''],
             ['','','']
            ] // empty board
    currentPlayer = '1';
}


/****** STATE UPDATER (THE GAME BOARD) ******/
var processMove= (move) => {
    console.log(`Processing move for ${currentPlayer} at position ${move}`);
    console.log(`Target: [${~~(move/3)}, ${move%3}]`);

    //set move:
    board[~~(move/3)][move%3] = currentPlayer;

    if (currentPlayer === 1) {
        currentPlayer = -1;
    } else currentPlayer = 1;

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