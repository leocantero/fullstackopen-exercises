import StatisticLine from "./StatisticLine"

const Statistics = ({
    good,
    neutral,
    bad,
    total,
    avg,
    positive }) => {

    if (total === 0) {
        return (
            <div>
                <h2>Statistics</h2>
                <p>No feedback given</p>
            </div>
        )
    }

    return (
        <div>
            <h2>Statistics</h2>

            <table>
                <thead>
                    <tr>
                        <th>Stat</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <StatisticLine text="Good" value={good} />
                    <StatisticLine text="Neutral" value={neutral} />
                    <StatisticLine text="Bad" value={bad} />
                    <StatisticLine text="Total" value={total} />
                    <StatisticLine text="Average" value={avg} />
                    <StatisticLine text="Positive" value={positive + "%"} />
                </tbody>
            </table>

        </div>
    )
}


export default Statistics