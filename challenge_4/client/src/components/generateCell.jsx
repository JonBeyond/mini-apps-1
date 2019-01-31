function GenerateCell(props) {
    let cellID = `${props.y},${props.x}`
    let icon = '';
    if (props.val === 1) {
        icon = 'X';
    }
    if (props.val === -1) {
        icon = 'O';
    }
    return (
        <div className='boardcell' id={cellID} onClick={props.click}>{icon}</div>
    )
}

export default GenerateCell;