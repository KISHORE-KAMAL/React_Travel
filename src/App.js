import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import Services from "./Pages/Services"
import Signup from "./Pages/Signup"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App