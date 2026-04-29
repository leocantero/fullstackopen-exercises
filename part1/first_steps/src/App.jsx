import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = (props) => {
    console.log(props)
    return(
      <>
        <p>Hello, {props.name}. Your age is: {props.age}</p>
      </>
    )
}

function App() {

  const family = [{name:"Mili",age:17},{name:"Ste",age:52},{name:"Adri",age:52}]
  const family_length = family.length

  return (
    <>
      <div>
        <Hello name="Leonel" age="22"/>
        <Hello name={family[0].name} age={family[0].age}/>
        <Hello name={family[1].name} age={family[1].age}/>  
        <Hello name={family[2].name} age={family[2].age}/>
      </div>
    </>
  )
}

export default App
