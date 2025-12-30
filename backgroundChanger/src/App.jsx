import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center gap-2.5 shadow-lg bg-white px-3 py-2 rounded-full'>
          <button onClick={() => setColor('red')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'red' }}>Red</button>
          <button onClick={() => setColor('green')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'green' }}>green</button>
          <button onClick={() => setColor('olive')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'olive' }}>olive</button>
          <button onClick={() => setColor('blue')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'blue' }}>blue</button>
          <button onClick={() => setColor('purple')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'purple' }}>purple</button>
          <button onClick={() => setColor('coral')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'coral' }}>coral</button>
          <button onClick={() => setColor('crimson')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'crimson' }}>crimson</button>
          <button onClick={() => setColor('goldenrod')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'goldenrod' }}>goldenrod</button>
          <button onClick={() => setColor('teal')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'teal' }}>teal</button>
          <button onClick={() => setColor('rosybrown')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: 'rosybrown' }}>rosybrown</button>
        </div>
      </div>
    </div>
  )
}

export default App
