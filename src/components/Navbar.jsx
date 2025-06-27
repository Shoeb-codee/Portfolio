import React from 'react'
import { useState } from 'react';
import {RiMenu2Line,RiCloseLine} from "@remixicon/react"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Navbar = () => {

  useGSAP(()=>{
    gsap.from("#portfolio",{
      y:1000,
      rotate:360,
      duration:2,
      delay:.3,
    })

    gsap.from("#nav-icons",{
      y:1000,
      duration:2,
      rotate:270,
      stagger:1
    })
  })



  const [menu,openMenu] = useState(false);
  const [showMenu,setshowMenu]= useState(true);

  return (
    <nav className='flex flex-wrap justify-between text-white md:items-center px-10 pt-6 md:px-20'>
      <span id='portfolio' className='text-5xl text-red-500 font-bold tracking-wide'>Portfolio</span>
      <ul  id='nav-icons' className={`  ${menu?"block":"hidden"}    mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
      
<a href="#Home">
        <li className='text-md md:text-lg transition-all duration-300 p-1 md:p-0 md:hover:text-red-600 md:hover:text-xl' > Home</li>

</a>
<a href="#About">
        <li  className='text-md md:text-lg transition-all duration-300 p-1 md:p-0 md:hover:text-red-600 md:hover:text-xl'>About</li>

</a>
<a href="#Skills">
        <li  className='text-md md:text-lg transition-all duration-300 p-1 md:p-0 md:hover:text-red-600 md:hover:text-xl '>Skills</li>
  </a>        
<a href="#Projects">
        <li  className='text-md md:text-lg transition-all duration-300 p-1 md:p-0 md:hover:text-red-600 md:hover:text-xl'>Projects</li>
  </a>       
<a href="">
        <li className='text-md md:text-lg transition-all duration-300 p-1 md:p-0 md:hover:text-red-600 md:hover:text-xl '>Contacts</li>
  </a>     
   </ul>
      {
        showMenu?(<RiMenu2Line size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300'
          onClick={ ()=>{
            openMenu(!menu);
            setshowMenu(!showMenu);
          }
           }
          />):(<RiCloseLine size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300' />)
      }
    </nav>
  )
}

export default Navbar;