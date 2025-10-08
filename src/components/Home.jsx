import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import profileImage from '../assets/Shoeb.jpg'

const Home = () => {
  useGSAP(() => {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    
    const tl = gsap.timeline();
    
    tl.from("#name1", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from("#name2", {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.5")

    gsap.to("#img-container", {
      y: isMobile ? -8 : -15,
      duration: 2.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });

    gsap.to("#img-container", {
      rotate: isMobile ? 2 : 3,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 0.5
    });
  });

  return (
    <div id='Home' className='bg-black text-white flex flex-col md:flex-row w-full justify-center md:justify-between md:pt-[20vh] md:gap-12 gap-6 min-h-screen px-6 md:px-20'>
      <div className='w-full md:w-2/4 text-center md:text-left md:space-y-6'>
        <h1 id='name1' className='text-3xl sm:text-4xl leading-tight md:text-6xl font-bold'>
          Hello, I am <br />
          <span
            id='name2'
            className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 drop-shadow-lg'
          >
            Shoeb
          </span>{' '}
          Ahmad
        </h1>
        <p
          id='desc'
          className='text-base sm:text-xl md:text-xl max-w-2xl text-slate-300 mx-auto md:mx-0 leading-4 md:leading-relaxed'
        >
         MERN Stack Developer crafting seamless web experiences. I specialize in building full-stack applications with MERN. With 2 years of hands-on experience in React and Node.js , I focus on turning complex problems into elegant, user-friendly solutions.
        </p>
        <div className='flex gap-5 pl-6'>
          <a href="https://github.com/Shoeb-codee" target="_blank" rel="noreferrer" 
             className='w-[32vw] md:w-[18vw] text-center text-white text-lg md:text-xl font-semibold rounded-full py-3 hover:marker:bg-gradient-to-r hover:from-teal-600 hover:to-green-400 bg-gradient-to-r from-blue-500 to-cyan-400 hover:opacity-90 active:scale-95 transition shadow-lg shadow-blue-500/20'>
            Github
          </a>
          <a href="mailto:shoebahmad698@gmail.com" target="_blank" rel="noreferrer"
             className='w-[32vw] md:w-[18vw] text-center text-white text-lg md:text-xl font-semibold rounded-full py-3 hover:marker:bg-gradient-to-r hover:from-cyan-600 hover:to-green-500 bg-gradient-to-r from-cyan-400 to-teal-400 hover:opacity-90 active:scale-95 transition shadow-lg shadow-cyan-500/20'>
            Contact Me
          </a>
        </div>
      </div>
      <div id='img' className='relative  md:mr-10 mr-28 md:mt-0'>
        <div id='img-container' className='relative z-10'>
          {/* Enhanced gradient border container */}
          <div className='rounded-full '>
            <div className='rounded-full p-1 bg-slate-950'>
              <img
                id='profile-img'
                className='relative z-10 rounded-full 
                         h-48 w-48 sm:h-64 sm:w-64 md:h-[350px] md:w-[350px] lg:h-[420px] lg:w-[420px]
                         object-cover transition-transform duration-300 will-change-transform
                         hover:scale-[1.02] hover:rotate-[-2deg]
                         '
                src={profileImage}
                alt="Profile photo"
              />
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Home
