const Comment = ({option,onClick}) => {
    
    return(
        <button onClick={onClick}>
            {option}
        </button>
    )
}

export default Comment