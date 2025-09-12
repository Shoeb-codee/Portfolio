import React, { useState, useEffect } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import hotel from "../assets/hotel.jpeg"
import ecom from "../assets/ecom.png"

const ProjectCard = () => {
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [projects] = useState([
    {
      id: 1,
      image: ecom,
      title: "E-Commerce App",
      description: "A modern, responsive frontend application designed for an e-commerce platform. Built with React.js and Tailwind CSS.",
      demoUrl: "https://your-chat-demo.com",
      sourceCodeUrl: "https://github.com/Shoeb-codee/E-commerce-website"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBib29raW5nfGVufDB8fDB8fHww",
      title: "WanderLust",
      description: "Discover and book hotels worldwide with seamless checkout.",
      demoUrl: "https://wanderlust-project-s1cn.onrender.com/",
      sourceCodeUrl: "https://github.com/Shoeb-codee/WanderLust-Project"
    },
    {
      id: 3,
      image: "https://media.istockphoto.com/id/1296350238/photo/man-ordering-taxi-on-mobile-phone-app-on-the-street.jpg?s=612x612&w=0&k=20&c=1uAthfkxKSxC64eWcz4SFv9KZGeOhn_z4XOuYLTIBnU=",
      title: "Ride Booking",
      description: "Book rides instantly with live ETAs and smart routing.",
      demoUrl: "https://your-ride-demo.com",
      sourceCodeUrl: "https://github.com/Shoeb-codee/UBER"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      title: "Music Player",
      description: "Stream and manage your favorite tracks with a sleek UI.",
      demoUrl: "#",
      sourceCodeUrl: "https://github.com/Shoeb-codee/Music-App"
    }
  ]);

  useEffect(() => {
    const checkScreenSize = () => {
      setShowScrollButtons(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div id='Projects' className='scroll-mt-24 px-2 py-8 md:px-8 md:py-20'>
      <div className='text-white max-w-6xl mx-auto'>
        <h1 className='text-2xl md:text-4xl font-bold text-teal-400 text-center md:text-left mb-6 md:mb-8'>
          PROJECTS
        </h1>

        <div className="relative">
          {/* Enhanced gradient fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-slate-950  to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-slate-950  to-transparent z-10" />

          {/* Mobile scroll indicators */}
          {showScrollButtons && (
            <div className="absolute -bottom-6 left-0 right-0 flex justify-center items-center gap-2 mt-4 text-white/70 z-30">
              <IoIosArrowBack className="animate-pulse" />
              <span className="text-sm">Scroll</span>
              <IoIosArrowForward className="animate-pulse" />
            </div>
          )}

          <div
            className="flex gap-4 md:gap-10 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch"
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="min-w-[250px] max-w-[280px] md:min-w-[350px] md:max-w-sm snap-center group 
                         rounded-xl overflow-hidden bg-slate-800/60 ring-1 ring-white/10 
                         shadow-lg hover:shadow-2xl transition-all duration-300 
                         hover:-translate-y-1 flex-shrink-0"
              >
                <div className='w-full h-32 md:h-52 overflow-hidden'>
                  <img
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                    src={project.image}
                    alt={`${project.title} preview`}
                  />
                </div>
                <div className='p-3 md:p-5'>
                  <h2 className='text-lg md:text-2xl font-bold text-white text-center'>
                    {project.title}
                  </h2>
                  <p className='text-xs md:text-base mt-2 text-center text-slate-300 line-clamp-2 md:line-clamp-none'>
                    {project.description}
                  </p>
                  <div className='mt-3 md:mt-4 flex gap-2 md:gap-3'>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className='w-1/2 text-center text-white text-xs md:text-base font-semibold rounded-full py-1.5 md:py-2 
                               bg-gradient-to-r from-cyan-400 to-emerald-400 hover:opacity-90 active:scale-95 transition'
                    >
                      DEMO
                    </a>
                    <a
                      href={project.sourceCodeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className='w-1/2 text-center text-white text-xs md:text-base font-semibold rounded-full py-1.5 md:py-2 
                               border border-cyan-400/70 hover:bg-cyan-400/10 active:scale-95 transition'
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Existing scrollbar styles */}
      <style>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default ProjectCard