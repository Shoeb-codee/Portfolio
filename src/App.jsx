import React from 'react'
import {Link, Route, Routes,} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
const About = React.lazy(() => import('./components/About'));
import Skills from './components/Skills'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Footer from './components/Footer'
import Contact from './components/Contact';
import ProjectCard from './components/ProjectCard';

gsap.registerPlugin(useGSAP);


const App = () => {
  return (
    <div className='bg-black h-auto w-full overflow-hidden'>
      <Navbar />
      
      <Home />
      <About />
      <Skills />
      <ProjectCard />
      <Contact />
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