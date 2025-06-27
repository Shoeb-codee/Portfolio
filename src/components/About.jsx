import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  return (
    <>
    
     <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-slate-700 shadow-xl md:m-20 bg-opacity-30 rounded-lg'>
      
      <div className='border-2 border-white rounded-lg'>
      <span><h2 className='text-2xl rounded-full p-2 w-52 hover:scale-105 text-teal-400 md:text-4xl font-bold m-5 cursor-pointer hover:bg-black'>About Me</h2></span>
        <div className=' md:flex p-10 md:py-10 md:px-32 flex-wrap flex flex-col items-center md:flex-col gap-5'> 
          
            <div className=' p-1 flex gap-3 rounded-xl items-center overflow-hidden hover:bg-slate-950'>
              <img className=' border-black w-20 h-20 md:w-44 md:h-36 rounded-md' src="frontend.jpeg" alt="" />
              <span className='w-auto ml-5  items-center'>
                <h1 className='text-2xl md:text-4xl font-semibold leading-normal py-1'>Frontend Developer</h1>
                <p className='text:sm md:text-base leading-tight '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus at atque molestiae quo! Amet, nisi quaerat quis saepe totam aut expedita veritatis sapiente nulla a qui, error delectus nesciunt harum!</p>
              </span>
            </div>

            <div className='p-1 flex gap-3 rounded-xl items-center overflow-hidden hover:bg-slate-950'>
            <img className=' border-black w-20 h-20 md:w-44 md:h-36 rounded-md' src="backend.jpeg" alt="" />
              <span className='w-auto ml-5'>
                <h1 className='text-2xl md:text-4xl font-semibold leading-normal py-1'>Backend Developer</h1>
                <p className='text:sm md:text-base leading-tight '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus at atque molestiae quo! Amet, nisi quaerat quis saepe totam aut expedita veritatis sapiente nulla a qui, error delectus nesciunt harum!</p>
              </span>
            </div>

            <div className='p-1 flex gap-3 rounded-xl items-center overflow-hidden hover:bg-slate-950'> 
            <img className=' border-black w-20 h-20 md:w-44 md:h-36 rounded-md' src="Database.jpeg" alt="" />
              <span className='w-auto ml-5'>
                <h1 className='text-2xl md:text-4xl font-semibold leading-normal py-1'>Database Developer</h1>
                <p className='text:sm md:text-base leading-tight '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus at atque molestiae quo! Amet, nisi quaerat quis saepe totam aut expedita veritatis sapiente nulla a qui, error delectus nesciunt harum!</p>
              </span>
            </div>
        </div>
      </div>
    </div>
    </>
   
  )
}

export default About