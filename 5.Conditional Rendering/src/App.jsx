import { useState } from "react";
import "./App.css";

function App() {
  const [showbtn, setshowbtn] = useState(false);
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "First todo",
    },
    {
      title: "Hello",
      desc: "Second todo",
    },
  ]);

  const Todo = ({todo}) => {
    return (
      <>
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
      </>
    );
  };

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


      {/* Redering Lists */}
      {todos.map(todo => {
        return <Todo key={todo.title} todo={todo} />

        // return (<div key={todo.title}>
        //     <div className="todo">{todo.title}</div>
        //     <div className="todo">{todo.desc}</div>
        //   </div>
        // )

      })}


      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>Toggle button</button>
      </div>
    </>
  );
}

export default App;
