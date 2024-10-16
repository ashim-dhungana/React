import React from "react";
import Component1 from "./Component1";
import { useContext } from "react";
import { counterContext } from "../context/context";

const Button = () => {

    const value = useContext(counterContext)
    const setCount = value.setCount

  return (
    <div>
      <button onClick={()=> setCount(count => count+1)}>
        <span>
          <Component1 />
        </span>
        This is a button
      </button>
    </div>
  );
};

export default Button;