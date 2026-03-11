import Part from './Part'

const Content = (props) => {

    return (
        <>
            {
                props.parts.map(
                    (part) => <Part key={part.part} part={part.part} exercises={part.exercises}/>
                )
            }
        </>
    )
}

export default Content