import { useState } from 'react'
import Anecdote from './Anecdote'
import Button from './Button'

function App() {
  const [selected, setSelected] = useState(0)
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const anecdotes_length = anecdotes.length
  
  const [votes, setVotes] = useState(new Array(anecdotes_length).fill(0))
  

  const randomInt = (max) => {
    return Math.floor(Math.random() * max)
  }

  const handleNextAnecdote = () => {
    console.log("Anecdote updated")
    setSelected(randomInt(anecdotes_length))
  }

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    console.log("Votes updated:", newVotes)
    setVotes(newVotes)
  }

  const getMostVotedIndex = () => {
    return votes.indexOf(Math.max(...votes))
  }

  //console.log("Array length:", anecdotes_length)
  //console.log("Random anecdote:", anecdotes[randomInt(anecdotes_length)])

  return (
    <>
      <Anecdote title="Anecdote of the Day" anecdote={anecdotes[selected]} />
      <Button text="next anecdote" onClick={handleNextAnecdote}/>
      <Button text="vote" onClick={handleVote}/>
      <Anecdote title="Anecdote with most votes" anecdote={anecdotes[getMostVotedIndex()]} />
    </>
  )
}

export default App
