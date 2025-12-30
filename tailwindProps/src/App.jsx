import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  // let myObj = {
  //   username: 'Aman',
  //   age: 20,
  //   isloggedIn: true
  // }

  let username=['aman','kumar']

  return (
    <>
      {/* <h1 className='bg-green-200 p-4 text-black rounded-2xl '>tailwind test</h1> */}


      <Card obj={username[0]} />
      <Card  obj={username[1]} />
    </>
  )
}

export default App
