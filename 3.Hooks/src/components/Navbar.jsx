import React from "react";
import { useEffect } from "react";

const Navbar = (props) => {

  // Run on every render
  useEffect(() => {
    alert("This runs on every render");
  });

  // Run only on first render
  useEffect(() => {
    alert("This is the first render");
  }, []);

//   Run when value/state of props.name is changed
  useEffect(() => {
    alert("Name is changed.");
  }, [props.name]);

  return (
    <div>
      <p>The name is {props.name}</p>
    </div>
  );
};

export default Navbar;
