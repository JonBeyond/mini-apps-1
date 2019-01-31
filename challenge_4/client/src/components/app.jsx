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
            currentPlayer: 1
        }
        this.placePiece = this.placePiece.bind(this);
    }

/******************** STATE ********************/
    placePiece(event) {
        //pull out the ID from which the click came from
        let location = event.target.id;
        let col = location[2];
        let row = location[0];

        //determine if this is a valid mode
        console.log(`Checking play at ${location}`); //TODO: remove debugging
        if (!this.validatePlay(col)) {
            console.log('sorry - that column is full. Try another column')
            return;
        }
        //place piece at the lowest non-zero row/col
        let b = this.state.board.slice(0);

        for (let i = 5; i >= 0; i--) {
            if (b[i][col] === 0) {
                b[i][col] = this.state.currentPlayer;

                let next = null;
                if (this.state.currentPlayer === 1) {
                    next = -1;
                } else next = 1;
                this.setState({
                    board: b,
                    currentPlayer: next
                });
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


/******************** VIEWER ********************/

    render() {
        return (
            <div>
                <div className="title">Welcome to Mini-Connect 4!</div>
                <div className="game" >
                    <br></br>
                    <div>Current player is {this.state.currentPlayer}</div>
                    <br></br>
                    <div>Click on any column below to place your piece:</div>
                    <br></br>
                </div>
                <div className='board'>
                    <br></br>
                    <div><CreateBoard board={this.state.board} click={this.placePiece}/></div>
                    <br></br>
                </div>
            </div>
        )
    }
}


export default App;