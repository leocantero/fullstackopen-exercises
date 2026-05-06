import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const notes = [
  {
    id: 1,
    text: 'HTML is easy',
  },
  {
    id: 2,
    text: 'Browser can execute only JavaScript',
  },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App notes={notes} />
  </StrictMode>,
)
