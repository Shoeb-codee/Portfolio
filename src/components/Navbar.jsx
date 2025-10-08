import React from 'react'
import { useState } from 'react';
import {RiMenu2Line,RiCloseLine} from "@remixicon/react"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Navbar = () => {

  useGSAP(()=>{
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    gsap.from("#portfolio",{
      y:10,
      opacity:0,
      duration:2,
      delay:.3,
    })

    gsap.from("#nav-icons",{
      y:10,
      opacity:0,
      duration:3,
      stagger:1
    })

    // Subtle professional waving effect for brand/logo (run once, after intro completes)
    gsap.to('#portfolio',{
      rotate: isMobile ? 0.8 : 1.4,
      y: isMobile ? -1 : -2,
      duration: 3,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: 1,
      delay: 2.4,
      transformOrigin: '50% 80%'
    })
  })



  const [menu,openMenu] = useState(false);
  const [showMenu,setshowMenu]= useState(true);

  return (
    <nav className='sticky top-0 z-50 flex flex-wrap justify-between text-white md:items-center px-10 pt-6 md:px-20 bg-black backdrop-blur-md border-b border-slate-800/50'>
      <span id='portfolio' className='text-5xl font-bold tracking-wide inline-block will-change-transform'>
        <span className='text-cyan-500'>P</span>ortfolio
      </span>
      <ul  id='nav-icons' className={`  ${menu?"block":"hidden"}    mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`} onClick={()=>{ if(!showMenu){ openMenu(false); setshowMenu(true);} }}>
      
<a href="#Home">
        <li className='text-md md:text-lg transition-all duration-300 p-1 md:p-0 md:hover:text-red-500 md:hover:text-xl' > Home</li>

</a>
<a href="#About">
        <li  className='text-md md:text-lg transition-all duration-300 p-1 md:p-0 md:hover:text-red-500 md:hover:text-xl'>About</li>

</a>
<a href="#Skills">
        <li  className='text-md md:text-lg transition-all duration-300 p-1 md:p-0 md:hover:text-red-500 md:hover:text-xl '>Skills</li>
  </a>        
<a href="#Projects">
        <li  className='text-md md:text-xl text-cyan-500 transition-all duration-300 p-1 md:p-0 md:hover:text-emerald-500 md:hover:text-2xl'>Projects</li>
  </a>       
<a href="#Contacts">
        <li className='text-md md:text-lg transition-all duration-300 p-1 md:p-0 md:hover:text-red-500 md:hover:text-xl '>Contacts</li>
  </a>     
   </ul>
      {
        showMenu?(
          <RiMenu2Line
            size={30}
            className='md:hidden absolute right-10 top-6 transition-all duration-300'
            onClick={ ()=>{
              openMenu(true);
              setshowMenu(false);
            }}
          />
        ):(
          <RiCloseLine
            size={30}
            className='md:hidden absolute right-10 top-6 transition-all duration-300'
            onClick={ ()=>{
              openMenu(false);
              setshowMenu(true);
            }}
          />
        )
      }
    </nav>
  )
}

export default Navbar;