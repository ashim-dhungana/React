import { useState } from "react";
import "./App.css";
import Fruits from "./components/Fruits";
import Cars from "./components/Cars";
import Components from "./components/Components";

function App() {
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

  return (
    <>
      {/* Redering Lists */}
      {todos.map((todo) => {

        return (<div key={todo.title}>
            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.desc}</div>
          </div>
        )
      })}

      <hr />

      <Fruits />

      <hr />

      <Cars />

      <hr />

      <Components />
    </>
  );
}

export default App;
