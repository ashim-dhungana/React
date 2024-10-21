import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, multiply, divide } from "./redux/counter/counterSlice";

// USE REDUX TOOLKIT

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />

      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        Count is {count}
        <button onClick={() => dispatch(increment())}>+</button>

        <hr />

        <button onClick={() => dispatch(divide())}>/</button>
        <button onClick={() => dispatch(multiply())}>*</button>
      </div>
    </>
  );
}

export default App;