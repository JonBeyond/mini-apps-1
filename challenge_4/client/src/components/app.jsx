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
                o: 0
            },
            dbresults: []
        }
        this.placePiece = this.placePiece.bind(this);
    }

/******************** RESET ********************/
    reset() {
        let nextPlayer = null;
        if (this.state.winner === 'X') {
            this.state.score.x++;
            nextPlayer = -1;
            this.storeResult('X');
        } else if (this.state.winner === 'O') {
            this.state.score.o++;
            nextPlayer = 1;
            this.storeResult('O');
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
            currentPlayer: nextPlayer,
            db: null
        })
        this.getResults();
    }
/******************** SERVER COMMUNICATION ********************/
    storeResult(winner) {
        let url = 'http://127.0.0.1:3000/result';
        let connection = new XMLHttpRequest();
        connection.open('POST', url), true;
        connection.setRequestHeader('content-type','application/JSON');
        connection.onreadystatechange = () => {
            if (connection.readyState === 4) {
                console.log("Game sent to server");
            }
        }
        connection.send(JSON.stringify(winner));
    }

    getResults() {
        console.log('sending get request for results');
        let url = 'http://127.0.0.1:3000/result';
        let connection = new XMLHttpRequest();
        connection.onreadystatechange = () => {
            if (connection.readyState === XMLHttpRequest.DONE) {
                this.setState({
                    db: JSON.parse(connection.responseText)
                });
            }
        }
        connection.open('GET', url), true;
        connection.send();
    }

/******************** STATE ********************/
    placePiece(event) {
        if (this.state.complete) return;

        //pull out the ID from which the click came from
        let location = event.target.id;
        let col = location[2];

        //determine if this is a valid mode
        if (!this.validatePlay(col)) {
            console.log('sorry - that column is full. Try another column');
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
        }

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
        return `Current score (X-O) : ${tracker.x}-${tracker.o}`
    }

    generateResultText() {
        console.log(this.state.db);
        if (this.state.db === null || this.state.db === undefined) return [''];

        let max = 30;
        let str = [];
        if (this.state.db.length < 30) {
            max = this.state.db.length;
        }
        for (let i = 0; i < max; i++) {
            str.push(`Id: ${this.state.db[i]['id']}, Winner: ${this.state.db[i]['result']}, Timestamp: ${this.state.db[i]['timestamp']}`);
        }
        return str;
    }

    render() {
        let statusText = this.generateStatusText();
        let scoreText = this.generateScoreText();
        let dbResults = this.generateResultText();
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
                <div>Want to start a new game? If the game is completed, the result will be sent to the server.<br></br>
                <button onClick={this.reset.bind(this)}>Start new game</button></div>
                <br></br>
                <br></br>
                {dbResults.map(result => {
                    return (
                        <div>{result}</div>
                    )
                })}
            </div>
        )
    }
}


export default App;