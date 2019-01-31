import createRows from './app.jsx';
import createRow from './app.jsx';
import showGameState from './showGameState.jsx';


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
            <div>Welcome to Mini-connect 4!
                <br></br>
                <gameState />
                <br></br>
                <createRows />
            </div>
        )
    }
}


export default App;