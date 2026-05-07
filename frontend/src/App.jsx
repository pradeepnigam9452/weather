import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
 import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
   </Routes>
   <Footer />
   </>
  )
}

export default App
