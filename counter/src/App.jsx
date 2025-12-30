import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(0)

  function increaseValue() {
    if (Counter < 20) {
      // setCounter(Counter+1)
      // setCounter(Counter+1)
      // setCounter(Counter+1)
      // setCounter(Counter+1)

      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
    } else {
      alert('counter should not go above 20')
    }
  }

  function decreaseValue() {
    if (Counter > 0) {
      setCounter((prevCounter) => prevCounter - 1)
    } else {
      alert('counter should not go below 0')
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {Counter}</h2>

      <button onClick={increaseValue}>Increase value {Counter}</button>
      <br />
      <br />
      <button
        onClick={decreaseValue}
      >Decrese value{Counter}</button>
    </>
  )
}

export default App
