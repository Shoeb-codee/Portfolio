import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div id='Projects' className='p-10 md:p-20 h-screen'>
       <div className='text-white '>
      <h1 className='text-2xl md:text-4xl font-bold text-teal-400 '>PROJECTS</h1>
      <div className='flex flex-wrap gap-12 mt-10 px-10 md:px-32'>
        {/* Project Card */}
        <div className='p-2 bg-slate-600 rounded-md'>
          <div className='flex flex-col flex-wrap w-52 h-52 md:w-80 md:h-96 text-white text-sm md:text-lg bg-slate-600 rounded-md overflow-hidden'>
      <div>
        <img className='w-full h-24 md:h-48' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABMFpu67LsuOACJ0DAeJDHkqtUWNDiwfQaw&s" alt="" />
      </div>
      <div className='text-black p-1 pt-2'>
        <h1 className='text-xl md:text-4xl font-serif md:font-bold font-semibold text-center md:mt-1'>Chat App</h1>
        <p className=' leading-tight md:my-2'>A sleek real-time chat app with instant messaging, live user status, and secure logins </p>
      </div>
      <div className='flex md:gap-3 gap-2 md:mt-3 md:p-1' >
        <button  className='text-white bg-slate-800 text-base md:text-2xl font-semibold rounded-full px-2' >DEMO</button>
        <a href="https://github.com/Shoeb-codee/UBER" className='text-white bg-slate-800 text-base md:text-2xl font-semibold rounded-full px-2'>Source Code</a>
        
              </div>
    </div>
        </div>
        {/* Project Card Hotel */}
 <div className='p-2 bg-slate-600 rounded-md'>
          <div className='flex flex-col flex-wrap w-52 h-52 md:w-80 md:h-96 text-white text-sm md:text-lg bg-slate-600 rounded-md overflow-hidden'>
      <div>
        <img className='w-full h-24 md:h-48' src="hotel.jpeg" alt="" />
      </div>
      <div className='text-black p-1 pt-2'>
        <h1 className='text-xl md:text-4xl font-serif md:font-bold font-semibold text-center md:mt-1'>Hotel Booking</h1>
        <p className=' leading-tight md:my-2'>Find best Room's anywhere , All in your reach is here.</p>
      </div>
      <div className='flex md:gap-3 gap-2 md:mt-3 md:p-1' >
        <button  className='text-white bg-slate-800 text-base md:text-2xl font-semibold rounded-full px-2' >DEMO</button>
        <a href="https://github.com/Shoeb-codee/UBER" className='text-white bg-slate-800 text-base md:text-2xl font-semibold rounded-full px-2'>Source Code</a>
        
              </div>
    </div>
        </div>
{/* Project CArd 3  */}

<div className='p-2 bg-slate-600 rounded-md'>
          <div className='flex flex-col flex-wrap w-52 h-52 md:w-80 md:h-96 text-white text-sm md:text-lg bg-slate-600 rounded-md overflow-hidden'>
      <div>
        <img className='w-full h-24 md:h-48' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrOOaGReubdl-j8HsbTjYJD674PtG4Lg656w&s" alt="" />
      </div>
      <div className='text-black p-1 pt-2'>
        <h1 className='text-xl md:text-4xl font-serif md:font-bold font-semibold text-center md:mt-1'>Ride Booking</h1>
        <p className=' leading-tight md:my-2'>Find best Route's anywhere , All in your reach is here.</p>
      </div>
      <div className='flex md:gap-3 gap-2 md:mt-3 md:p-1' >
        <button  className='text-white bg-slate-800 text-base md:text-2xl font-semibold rounded-full px-2' >DEMO</button>
        <a href="https://github.com/Shoeb-codee/UBER" className='text-white bg-slate-800 text-base md:text-2xl font-semibold rounded-full px-2'>Source Code</a>
        
              </div>
    </div>
        </div>


      {/* <ProjectCard src={"misic1.jpeg"} title={"Music App"} desc={"The application allows you to get all your favourite songs here!"} />
      <ProjectCard src={"hotel.jpeg"} title={"Hotel Booking"} desc={"Find best Room's anywhere , All in your reach is here."} />
      <ProjectCard src={"movie.jpeg"} title={"MovieFlix"} desc={"Watch all your favourite's movies and shows in premium quality."}   />
       */}

       </div>

    </div>
    </div>
   
  )
}

export default Project;