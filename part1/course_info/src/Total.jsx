const Total = (props) => {
    let total = props.parts.reduce((sum,part) => sum+part.exercises,0)
    return (
        <>
            <p>
                This course has a total of {total} exercises
            </p>
        </>
    )
}

export default Total