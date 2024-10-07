import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Timer from './components/Timer'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0);


  // USE EFFECT HOOK

  // Run when the value/state of count is changed
  useEffect(() => {
    alert("Button clicked");
    setColor(color+1);
  }, [count])
  

  return (
    <>

      <Timer/>

      <Navbar name={"Ashim " + color}/>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
