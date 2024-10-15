import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import User from "./components/User";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<> <Navbar /><Home /> </>)
    },
    {
      path: "/login",
      element: (<> <Navbar /><Login /> </>)
    },
    {
      path: "/about",
      element: (<> <Navbar /><About /> </>)
    },
    {
      path: "/user/:username",
      element: (<> <Navbar /><User /> </>)
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />

      <br />
      <hr />
      <br />

      {/* Traditional Way Using Router, Routes & Route */}

      {/* <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;