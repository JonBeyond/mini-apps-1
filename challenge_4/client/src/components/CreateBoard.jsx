import GenerateCell from './generateCell.jsx';

function CreateBoard(props) {
    return (
        <div className='boardgrid'>
            {props.board.map((row, rowIndex) => {
                return row.map((cell, colIndex) => {
                    return <GenerateCell x={colIndex} y={rowIndex} />
                })
            })}
        </div>
    )
}
export default CreateBoard;