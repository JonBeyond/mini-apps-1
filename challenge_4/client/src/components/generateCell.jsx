function GenerateCell(props) {
    return (
        <div className='boardcell'>{props.y},{props.x}</div>
    )
}

export default GenerateCell;