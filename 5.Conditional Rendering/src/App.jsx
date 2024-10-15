import { useState } from "react";
import "./App.css";

function App() {
  const [showbtn, setshowbtn] = useState(false);

  return (
    <>
      {/* If showbtn is True then display */}
      {showbtn && <button>Another button clicked</button>}

      <br />
      <br />

      {/* For both True and False condition */}
      {showbtn ? (
        <button>showbtn is True</button>
      ) : (
        <button>showtbn is False</button>
      )}


      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>Toggle button</button>
      </div>
    </>
  );
}

export default App;
