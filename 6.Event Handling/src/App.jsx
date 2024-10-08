import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function App() {

  const [name, setName] = useState("Ashim")

  const [inputValue, setInputValue] = useState('')

  const [form, setForm] = useState({
    name: "",
    phone: "",
  });

  // Event Handling using arrow function
  const handleClick = () => {
    alert("Button clicked");
  };
  const handleMouseOver = () => {
    alert("Mouse over");
  };

  // Event Handling in input
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleFormChange = (e) => {
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form)
  }

  // Event Handling in Form submission
  function handleInput(event){
    setInputValue(event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault();
    alert(`Form submitted with: ${inputValue}`);
  }


  return (
    <>
      {/* Event Handler is added within the button
       */}
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      <br />

      <div className="red" onMouseOver={handleMouseOver}>
        This is red div
      </div>

      <br />

      <input type="text" value={name} onChange={handleChange} />

      <hr />

      <input type="text" name="name" value={form.name} onChange={handleFormChange} />
      <input type="text" name="phone" value={form.phone} onChange={handleFormChange} />

      <br />

      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInput} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
