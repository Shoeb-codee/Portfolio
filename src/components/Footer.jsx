import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {CiLinkedin} from 'react-icons/ci'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <div id='footer' className='flex justify-around text-white p-10 md:p-12 items-center bg-blue-950'>

       <div>
        <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
        <h3 className='text-sm md:text-2xl font-normal'> Feel Free To reach out!! </h3>
       </div>
       <ul className='text-sm md:text-xl flex gap-5'>
        <a href="mailto:shoebahmad698@gmail.com">
          <li className='flex gap-2'>
          <MdOutlineEmail size={20} />
          shoebahmad698@gmail.com
        </li>
        </a>
        <a href="https://www.linkedin.com/in/shoeb-codeeii0116/">
        <li className='flex gap-2'>
          <CiLinkedin />
          linkedin
        </li>
        </a>
        <a href="https://github.com/Shoeb-codee">
         <li className='flex gap-2'>
          < FaGithub />
          Github
        </li>
        </a>
       
       </ul>
    </div>
  )
}

export default Footer