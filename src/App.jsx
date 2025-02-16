import { useState } from 'react'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Conditions from './pages/conditions'
import ServicePage from './pages/ServicePage'
import About from './pages/About'



function App() {
  return (
    
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conditions" element={<Conditions />} />  {/* Corrected the component name */}
          <Route path="/service" element={<ServicePage />} />
          <Route path="/about" element={<About />} />
         
        </Routes>
        <Footer />
        <Toaster />
    
    </Router>
  )
}

export default App
