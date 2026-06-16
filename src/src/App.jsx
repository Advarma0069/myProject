import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Headers from './Components/Header'
import Footer from './Components/Footer'
import Experience from './Components/Pages/Experience'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Skills from './Components/Pages/Skills'
import Projects from './Components/Pages/Project'
import Achievements from './Components/Pages/Achievements'
import Contact from './Components/Pages/Contact'
import HireMe from './Components/Pages/HireMe'
import MapPage from './Components/Pages/MapPage'
import Icons from './Components/Pages/Icons'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Headers />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Achievements" element={<Achievements />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/HireMe" element={<HireMe />} />
          <Route path="/MapPage" element={<MapPage />} />
          <Route path="/Icons" element={<Icons />} />
          

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
