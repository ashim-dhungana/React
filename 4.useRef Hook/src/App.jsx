import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);
  const clickCount = useRef(0);


  // USE REF HOOK

  const a = useRef(0);
  useEffect(() => {
    a.current = a.current + 1;
    console.log(`Rendering... a = ${a.current}`);
  });

  // Changing state without re-rendering
  const handleClick = () => {
    setClicks(clicks + 1);    //Triggers re-render
    clickCount.current += 1;  //Doesn't trigger re-render
    console.log("Click count (useRef): ", clickCount.current);
  };


  return (
    <>
      <div className="card">

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <h3>Clicks (state): {clicks}</h3>
        <button onClick={handleClick}>Click Me</button>

      </div>
    </>
  );
}

export default App;
