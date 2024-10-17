import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useMemo } from "react";
import Memo from "./components/Memo";

// An array that returns the number at index 4 million
const nums = new Array(5_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 4_000_000,
  };
});

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);

  // Very Expensive Computation
  // const magical = numbers.find( item => item.isMagical)

  // Stores the value in first render
  const magical = useMemo(() => numbers.find((item) => item.isMagical), []);

  return (
    <>

  <Memo />

      <div>
        <span> Magical number is {magical.index} </span>

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

        {/* Changing the value of Number when count is 10 so that the value is recalculated */}
        <button
          onClick={() => {
            setCount((count) => count + 1);
            if(count==5){
              console.log(5);
              setNumbers(new Array(2_000_000).fill(0).map((_, i) => {
                return {
                  index: i,
                  isMagical: i === 1_500_000
                }
              }))
            }
          }}
        >
          count is {count}
          {console.log(`The number is ${magical.index}`)}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
