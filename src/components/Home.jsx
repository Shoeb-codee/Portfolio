import React from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap';



const Home = () => {
  
  useGSAP(()=>{
    gsap.from("#name1",{
      x:-600,
      delay:2,
      duration:1,
      opacity:10,
    })
    gsap.from("#name2",{
      x:-400,
      rotate:200,
      delay:3,
      duration:2,
      opacity:10,
    })
    gsap.from("#desc",{
      x:-400,
      duration:1,
      opacity:0,
      delay:3
    })
    gsap.from("#btn",{
      y:1000,
      rotate:360,
      duration:1,
      opacity:0,
      delay:3.4
    })
    gsap.from("#img",{
      x:500,
      rotate:360,
      duration:1,
      opacity:0,
      delay:3
    })
  })


  return (
    <div id='Home' className='text-white flex  w-full justify-around items-start md:my-24 p-10 md:p-20'>
      <div className='md:w-2/4 '>
        <h1 id='name1' className='text-3xl md:text-6xl font-bold '>
        Hello' , I am <br /> <span id='name2' className='text-green-500'>Shoeb</span> Ahmad
        </h1>
        <p id='desc' className='text-base md:text-xl md:w-[30rem] pt-2'>
        I'm a full-stack developer using React.js and Node.js. Create responsive websites for clients and companies. Let's connect if you'd like to explore further!
        </p>
        <div id='btn' className='flex gap-5'>
          <a href="mailto:shoebahmad698@gmail.com">
        <button className='mt-5 md:mt-10 text-white py-2 px-3 text-base md:text-2xl md:py-2 md:px-3 hover:opacity-85 duration-300 hover:scale-105 rounded-3xl font-semibold bg-cyan-400 '>Contact Me</button>

          </a>

        <button className='mt-5 md:mt-10 text-white py-2 px-3 text-base md:text-2xl md:py-2 md:px-3 hover:opacity-85 duration-300 hover:scale-105 rounded-3xl font-semibold bg-cyan-400 '>Download Resume</button>

        </div>
       
      </div>
      <div id='img' className=''>
        <img className=' border-cyan-500 border-4 rounded-full h-36 w-36 md:h-96 md:w-96 animate-pulse ease-in-out duration-7000' src="photo.jpg" alt="" />
      </div>
    </div>
  )
}

export default Home