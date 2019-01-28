// EVENT LISTENERS:

var board = [];
var inputs = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
var currentPlayer = '';


/****** CONTROLLER FUNCTIONS & GAME INITIALIZATION ******/
var initialize = function() {
    let eventListeners = [];
    inputs.forEach(move => {
        eventListeners.push(document.getElementById(move).addEventListener("click", (event) => {
            //hide this button
            //pull out the button that was clicked
            //send the button that was commited to the processMove function
            let move = event.path[0].outerHTML.match(/id="\w*/)[0].substring(4);

            //disable the button here
            document.getElementById(move).disabled = true;

            processMove(move); //process move

            //update move here

        }))
    })

    board = [
             ['','',''],
             ['','',''],
             ['','','']
            ] // empty board
    currentPlayer = 'x';
}


/****** STATE UPDATER (THE GAME BOARD) ******/
var processMove= (move) => {
    console.log(`Processing move for ${currentPlayer} at position ${move}`);

    console.log(JSON.stringify(board));
}





//LETS GO!
initialize();