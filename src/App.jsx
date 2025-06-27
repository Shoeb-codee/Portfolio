import React from 'react'
import {Link, Route, Routes,} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/project'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Footer from './components/Footer'

gsap.registerPlugin(useGSAP);


const App = () => {
  return (
    <div className='bg-slate-950 h-auto w-full overflow-hidden'>
      <Navbar />
      
      <Home />
      <About />
      <Skills />
      <Project />
      <Footer />

      {/* <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/projects" element={<Project />} />
       </Routes> */}


      </div>
  )
}

export default App