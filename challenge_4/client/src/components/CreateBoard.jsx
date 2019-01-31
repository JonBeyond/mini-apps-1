import GenerateCell from './generateCell.jsx';

function CreateBoard(props) {
    return (
        <div className='boardgrid'>
            {props.board.map((row, rowIndex) => {
                return row.map((cell, colIndex) => {
                    return <GenerateCell click={props.click} x={colIndex} y={rowIndex} val={cell}/>
                })
            })}
        </div>
    )
}
export default CreateBoard;