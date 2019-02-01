import CreateBoard from './CreateBoard.jsx';
import ShowGameState from './showGameState.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0]
                    ],
            currentPlayer: 1,
            complete: false,
            winner: null,
            score: {
                x: 0,
                o: 0,
                ties: 0
            }
        }
        this.placePiece = this.placePiece.bind(this);
    }

/******************** RESET ********************/
    reset() {
        let nextPlayer = null;
        if (this.state.winner === 'X') {
            this.state.score.x++;
            nextPlayer = -1;
        } else if (this.state.winner === 'O') {
            this.state.score.o++;
            nextPlayer = 1;
        } else {
            console.log("Game was not complete when reset.  Starting new game.")
        }

        this.setState({
            board: [
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0]
                   ],
            complete: false,
            winner: null,
            currentPlayer: nextPlayer
        })
    }

/******************** STATE ********************/
    placePiece(event) {
        if (this.state.complete) return;

        //pull out the ID from which the click came from
        let location = event.target.id;
        let col = location[2];

        //determine if this is a valid mode
        if (!this.validatePlay(col)) {
            console.log('sorry - that column is full. Try another column')
            return;
        }
        //place piece at the lowest non-zero row/col
        let b = this.state.board.slice(0);

        for (let i = 5; i >= 0; i--) {
            if (b[i][col] === 0) {
                b[i][col] = this.state.currentPlayer;
                let row = i; //this is the coordinate of the new piece
                let nextPlayer = null;
                if (this.state.currentPlayer === 1) {
                    nextPlayer = -1;
                } else nextPlayer = 1;
                this.setState({
                    board: b,
                    currentPlayer: nextPlayer
                });
                this.checkBoard(row,col);
                return;
            }
        }
    }

    validatePlay(col) {
        if(this.state.board[0][col] === 0) {
            return true;
        }
        return false;
    }

    checkBoard(row,col) {
        return this.checkCol(row,col) || this.checkRow(row,col) || this.checkMajorDiags(row,col) || this.checkMinorDiags(row,col);
    }

    checkCol(row,col) {
        let colChecks = [];
        let r = this.state.board.slice()[row];
            for (let j = 0; j < 4; j++) {//start col
                let sum = r[j]+r[j+1]+r[j+2]+r[j+3];
                colChecks.push(sum);
            }
        if (colChecks.includes(4)) {
            this.setState({
                complete: true,
                winner: 'X'
            })
            return true;
        } else if (colChecks.includes(-4)) {
            this.setState({
                complete: true,
                winner: 'O'
            })
            return true;
        }
        return false;

    }

    checkRow(row,col) {
        let rowChecks = [];
        let b = this.state.board.slice(0);
        for (let j = 0; j < 3; j++) {
            let sum = (
                b[j+0][col]+
                b[j+1][col]+
                b[j+2][col]+
                b[j+3][col]
                );
            rowChecks.push(sum);
        }

        if (rowChecks.includes(4)) {
            this.setState({
                complete: true,
                winner: 'X'
            })
            return true;
        } else if (rowChecks.includes(-4)) {
            this.setState({
                complete: true,
                winner: 'O'
            })
            return true;
        }
        return false;
    }
    checkMajorDiags(row,col) {
        let major = [];
        let maxRow = 5; //min is always 0
        let maxCol = 6; //min is always 0
        let b = this.state.board.slice(0);

        //first navigate up and to the left
        while (row > 0 && col > 0) {
            row--;
            col--;
        }
        while (row <= maxRow && col <= maxCol) {
            major.push(b[row][col]);
            row++;
            col++;
        }
        //now lets check every 4 elements of major
        //major.length = 5; need to start 2
        //[0, 1, 1, 1, 1] length = 4;
        let majorSum = [];
        for (let i = 0; i < major.length-3; i++) {
            majorSum.push(major[i]+major[i+1]+major[i+2]+major[i+3]);
        }

        if (majorSum.includes(4)) {
            this.setState({
                complete: true,
                winner: 'X'
            })
            return true;
        } else if (majorSum.includes(-4)) {
            this.setState({
                complete: true,
                winner: 'O'
            })
            return true;
        }

        return false;
    }

    checkMinorDiags(row,col) {
        let minor = [];
        let maxRow = 5; //min is always 0
        let maxCol = 6; //min is always 0
        let b = this.state.board.slice(0);

        //first navigate up and to the left
        while (row < maxRow && col > 0) {
            row++;
            col--;
        }
        while (row > 0 && col <= maxCol) {
            minor.push(b[row][col]);
            row--;
            col++;
        } //note if at the end here, row/col will be outside range. /shrug
        //now lets check every 4 elements of major
        //major.length = 5; need to start 2
        //[0, 1, 1, 1, 1] length = 4;
        let minorSum = [];
        for (let i = 0; i < minor.length-3; i++) {
            minorSum.push(minor[i]+minor[i+1]+minor[i+2]+minor[i+3]);
        }

        if (minorSum.includes(4)) {
            this.setState({
                complete: true,
                winner: 'X'
            })
            return true;
        } else if (minorSum.includes(-4)) {
            this.setState({
                complete: true,
                winner: 'O'
            })
            return true;
        }

        return false;
    }


/******************** VIEWER ********************/


    generateStatusText() {
        if (this.state.complete) {
            return `Winner is ${this.state.winner}! Congratulations!`;
        } else if (this.state.currentPlayer === 1) {
            return 'Current player is X';
        } else return 'Current player is O';
    }

    generateScoreText() {
        let tracker = this.state.score;
        return `Current score (X-O-Ties) : ${tracker.x}-${tracker.o}-${tracker.ties}`
    }

    render() {
        let statusText = this.generateStatusText();
        let scoreText = this.generateScoreText();
        return (
            <div>
                <div className="title">Welcome to Mini-Connect 4!</div>
                <div className="game" >
                    <br></br>
                    <div>{scoreText}</div>
                    <br></br>
                    <br></br>
                    <div>{statusText}</div>
                    <br></br>
                    <div>Click on any column below to place your piece:</div>
                    <br></br>
                </div>
                <div className='board'>
                    <br></br>
                    <div><CreateBoard board={this.state.board} click={this.placePiece}/></div>
                    <br></br>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div>Want to bail out early?<br></br>
                <button onClick={this.reset.bind(this)}>Start new game</button></div>
            </div>
        )
    }
}


export default App;