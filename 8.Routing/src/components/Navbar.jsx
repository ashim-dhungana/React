import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navbar = () => {

    // Using Manual Navigation
    const navigate = useNavigate();

    const handleLogin = () => {
      alert("Logged In");
      navigate("/");
    };

  return (
    <div>
      <nav>

        {/* Conditional classes where either 'red' class is added or empty class is added according to the condition */}

        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/">
          <li>Home</li>
        </NavLink>

        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/login">
          <li>Login</li>
        </NavLink>

        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/about">
          <li>About</li>
        </NavLink>

        <button onClick={handleLogin}>Login Now</button>

      </nav>
    </div>
  );

};

export default Navbar;
