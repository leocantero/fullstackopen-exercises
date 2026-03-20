import { useState } from 'react'
import Comment from './Comment'
import Statistics from './Statistics'  

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const good_scoring = 1
  const neutral_scoring = 0
  const bad_scoring = -1

  const handleGood = () => {
    setGood(good+1)
    setTotal(total+1)
  }

  const handleNeutral = () => {
    setNeutral(neutral+1)
    setTotal(total+1)
  }

  const handleBad = () => {
    setBad(bad+1)
    setTotal(total+1)
  }

  const avg = () => (good_scoring*good + neutral_scoring*neutral + bad_scoring*bad) / total || 0

  const positive = () => (good / total * 100) || 0

  return (
    <>
      <h1>Unicafe</h1>
      <p>Give feedback</p>
      
      <Comment option="good" onClick={handleGood}/>
      <Comment option="neutral" onClick={handleNeutral}/>
      <Comment option="bad" onClick={handleBad}/>
      
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        avg={avg()}
        positive={positive()}>
      </Statistics>

    </>
  )
}

export default App
