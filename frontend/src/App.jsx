import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import WeatherDetails from './pages/WeatherDetails'
import FavoriteCities from './pages/FavoriteCities'
import ProtectedRoute from "./components/ProtectedRoute";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/weatherDetails"
          element={
            <ProtectedRoute>
              <WeatherDetails />
            </ProtectedRoute>
          }
        />
        <Route path="/mycities" element={<ProtectedRoute> <FavoriteCities /></ProtectedRoute>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
