import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {CiLinkedin} from 'react-icons/ci'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <div id='footer' className='flex flex-col md:flex-row justify-between md:justify-around text-white p-8 md:p-12 items-center bg-gradient-to-r from-[#0B1120] to-[#0F172A] border-t border-slate-800/50 gap-6 md:gap-0'>
      <div>
        <h1 className='text-2xl md:text-6xl font-bold text-center md:text-left bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text'>Contact</h1>
        <h3 className='text-sm md:text-2xl font-normal text-center md:text-left text-slate-300'> Feel Free To reach out!! </h3>
      </div>
      <ul className='text-sm md:text-xl flex flex-col md:flex-row gap-4 md:gap-5 items-center md:items-start'>
        <a href="mailto:shoebahmad698@gmail.com" aria-label='Send email' 
           className='hover:text-cyan-400 transition-colors flex items-center gap-2 hover:scale-105 duration-300'>
          <li className='flex items-center gap-2'>
            <MdOutlineEmail size={20} className="text-blue-400" />
            shoebahmad698@gmail.com
          </li>
        </a>
        <a href="https://www.linkedin.com/in/shoeb-codeeii0116/" target='_blank' rel='noreferrer' 
           aria-label='LinkedIn profile' className='hover:text-cyan-400 transition-colors flex items-center gap-2 hover:scale-105 duration-300'>
          <li className='flex items-center gap-2'>
            <CiLinkedin className="text-blue-400" />
            linkedin
          </li>
        </a>
        <a href="https://github.com/Shoeb-codee" target='_blank' rel='noreferrer' 
           aria-label='GitHub profile' className='hover:text-cyan-400 transition-colors flex items-center gap-2 hover:scale-105 duration-300'>
          <li className='flex items-center gap-2'>
            <FaGithub className="text-blue-400" />
            Github
          </li>
        </a>
      </ul>
    </div>
  )
}

export default Footer