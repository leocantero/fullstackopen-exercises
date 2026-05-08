import Header from './Header'
import Content from './Content'

const Course = ({ course }) => {
    const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
        <>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <p><b>Total of {totalExercises} exercises</b></p>
        </>
    )
}

export default Course