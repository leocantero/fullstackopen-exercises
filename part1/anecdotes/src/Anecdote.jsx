const Anecdote = ({anecdote, title}) => {
    
    return(
        <div>
            <h2>{title}</h2>
            <p>
                {anecdote}
            </p>
        </div>
    )
}

export default Anecdote