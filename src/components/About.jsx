import React, { useEffect } from 'react';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import frontend from "../assets/frontend.jpeg"
import Backend from "../assets/backend.jpeg"
import Database from "../assets/Database.jpeg"

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const cards = document.querySelectorAll('.card-animate');
    
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        },
        x: index % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });
    });
  });

  return (
    <>
    
     <div id='About' className='scroll-mt-24 text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-slate-700 shadow-xl m-4 md:m-20 bg-opacity-30 rounded-lg'>
      
      <div className='border-2 border-white rounded-lg w-full'>
      <span><h2 className='text-xl sm:text-2xl md:text-4xl rounded-full p-2 w-fit px-4 hover:scale-105 transition-transform text-teal-400 font-bold m-4 md:m-5 cursor-pointer hover:bg-black'>About Me</h2></span>
        <div className='md:flex p-4 sm:p-6 md:py-10 md:px-32 flex-wrap flex flex-col items-center md:flex-col gap-4 md:gap-5'> 
          
            <div className='card-animate w-full p-3 sm:p-4 flex gap-3 sm:gap-4 rounded-xl items-start overflow-hidden bg-slate-800/30 hover:bg-slate-600 transition-colors border border-white/10 shadow-sm'>
              <img className='border-black w-20 h-20 sm:w-24 sm:h-24 md:w-44 md:h-36 rounded-md object-cover shrink-0' src={frontend} alt="Frontend development" />
              <span className='w-auto ml-2 sm:ml-4'>
                <h1 className='text-lg sm:text-xl md:text-4xl font-semibold leading-snug py-1'>Frontend Developer</h1>
                <p className='text-sm md:text-base leading-tight text-slate-200'>I build responsive, accessible UIs with React, Tailwind CSS, and modern tooling. I focus on clean components, state management, and smooth interactions that work across devices.</p>
              </span>
            </div>

            <div className='card-animate w-full p-3 sm:p-4 flex gap-3 sm:gap-4 rounded-xl items-start overflow-hidden bg-slate-800/30 hover:bg-slate-600 transition-colors border border-white/10 shadow-sm'>
            <img className='border-black w-20 h-20 sm:w-24 sm:h-24 md:w-44 md:h-36 rounded-md object-cover shrink-0' src={Backend} alt="Backend development" />
              <span className='w-auto ml-2 sm:ml-4'>
                <h1 className='text-lg sm:text-xl md:text-4xl font-semibold leading-snug py-1'>Backend Developer</h1>
                <p className='text-sm md:text-base leading-tight text-slate-200'>I design and implement secure, scalable APIs with Node.js and Express, integrate databases, and optimize performance, reliability, and error handling for production systems.</p>
              </span>
            </div>

            <div className='card-animate w-full p-3 sm:p-4 flex gap-3 sm:gap-4 rounded-xl items-start overflow-hidden bg-slate-800/30 hover:bg-slate-600 transition-colors border border-white/10 shadow-sm'> 
            <img className='border-black w-20 h-20 sm:w-24 sm:h-24 md:w-44 md:h-36 rounded-md object-cover shrink-0' src={Database} alt="Database development" />
              <span className='w-auto ml-2 sm:ml-4'>
                <h1 className='text-lg sm:text-xl md:text-4xl font-semibold leading-snug py-1'>Database Developer</h1>
                <p className='text-sm md:text-base leading-tight text-slate-200'>I model data and write efficient queries using MongoDB and MySQL databases, ensuring data integrity, indexing, and backups for fast and reliable applications.</p>
              </span>
            </div>
        </div>
      </div>
    </div>
    </>
   
  )
}

export default About