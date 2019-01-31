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
    }

/******************** STATE ********************/



/******************** VIEWER ********************/

    render() {
        return (
            <div>
                <div className="title">Welcome to Mini-Connect 4!</div>
                <div className="game" >
                    <br></br>
                    <div><ShowGameState /></div>
                    <br></br>
                </div>
                <div className='board'>
                    <br></br>
                    <div><CreateBoard board={this.state.board}/></div>
                    <br></br>
                </div>
            </div>
        )
    }
}


export default App;