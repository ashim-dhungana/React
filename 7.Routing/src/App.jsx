import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import { createBrowserRouter } from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/about",
      element: <About />
    }
  ])

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  )
}

export default App