import GenerateCell from './generateCell.jsx';

function CreateRow(props) {
    return (
            {props.row.map((cell, col) => {
                return <GenerateCell x={col} y={props.rowNum}/>
            })}
    )
}
export default CreateRow;
/* props.rowNum = index of row
 * props.row = data for row
 */