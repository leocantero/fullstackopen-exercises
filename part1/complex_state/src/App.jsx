import { useState } from 'react'
import History from './History'
import Button from './Button'

function App() {

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total,setTotal] = useState(0)

  const handleLeftClick = () => {
    setLeft(left + 1)
    setAll(allClicks.concat('L'))
    setTotal(total + 1)
  }

  const handleRightClick = () => {
    setRight(right + 1)
    setAll(allClicks.concat('R'))
    setTotal(total + 1)
  }

  return (
    <>
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      <p>Left: {left}</p>
      <p>Right: {right}</p>
      <p>All Clicks: {allClicks.join(', ')}</p>
      <p>Total Clicks: {total}</p>
      <History allClicks={allClicks} />
    </>
  )
}

export default App
