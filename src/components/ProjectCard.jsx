import React, { useState } from 'react'
import hotel from "../assets/hotel.jpeg"
import ecom from "../assets/ecom.png"

const ProjectCard = () => {
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

  return (
    <div id='Projects' className='scroll-mt-24 px-2 py-12 md:px-8 md:py-20'>
      <div className='text-white max-w-6xl mx-auto'>
        <h1 className='text-2xl md:text-4xl font-bold text-teal-400 text-center md:text-left mb-8'>
          PROJECTS
        </h1>
        <div className="relative">
          {/* Gradient fade on left */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-20 rounded-l-2xl" />
          {/* Gradient fade on right */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-20 rounded-r-2xl" />
          <div
            className="flex gap-6 md:gap-10 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch"
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="min-w-[300px] max-w-xs md:min-w-[350px] md:max-w-sm snap-center group rounded-2xl overflow-hidden bg-slate-800/60 ring-1 ring-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0"
              >
                <div className='w-full h-40 md:h-52 overflow-hidden'>
                  <img
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                    src={project.image}
                    alt={`${project.title} preview`}
                  />
                </div>
                <div className='p-4 md:p-5'>
                  <h2 className='text-xl md:text-2xl font-bold text-white text-center'>
                    {project.title}
                  </h2>
                  <p className='text-slate-200 text-sm md:text-base mt-2 text-center'>
                    {project.description}
                  </p>
                  <div className='mt-4 flex gap-3'>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className='w-1/2 text-center text-white text-sm md:text-base font-semibold rounded-full py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:opacity-90 active:scale-95 transition'
                    >
                      DEMO
                    </a>
                    <a
                      href={project.sourceCodeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className='w-1/2 text-center text-white text-sm md:text-base font-semibold rounded-full py-2 border border-cyan-400/70 hover:bg-cyan-400/10 active:scale-95 transition'
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
      {/* Custom scrollbar hide */}
      <style>{`
        .hide-scrollbar {
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default ProjectCard