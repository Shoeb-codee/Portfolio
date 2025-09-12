import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FaCss3, FaGithub, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { DiNodejs } from 'react-icons/di';
import { SiExpress, SiMongodb } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useGSAP(() => {
    const skillCards = document.querySelectorAll('.skill-card');
    
    gsap.from(skillCards, {
      scrollTrigger: {
        trigger: "#Skills",
        start: "top center+=100",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    });
  });

  return (
    <div id='Skills' className='scroll-mt-24 text-white px-6 py-12 md:px-20 md:py-20'>
      <h1 className='text-2xl md:text-4xl font-bold text-teal-400 text-center md:text-left'>Technical Skills</h1>

      <div className='max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
        {/* HTML */}
        <div className='skill-card group bg-zinc-800/70 ring-1 ring-white/10 rounded-2xl p-4 md:p-5 flex items-start gap-4 hover:bg-zinc-800 transition-colors'>
          <FaHtml5 className='shrink-0' color='#E34F26' size={56} />
          <p className='text-slate-200 text-sm md:text-base leading-snug'>Structure web pages using semantic HTML elements for accessibility and SEO.</p>
        </div>

        {/* CSS */}
        <div className='skill-card group bg-zinc-800/70 ring-1 ring-white/10 rounded-2xl p-4 md:p-5 flex items-start gap-4 hover:bg-zinc-800 transition-colors'>
          <FaCss3 className='shrink-0' color='#1572B6' size={56} />
          <p className='text-slate-200 text-sm md:text-base leading-snug'>Build responsive, modern layouts with Tailwind CSS and scalable design systems.</p>
        </div>

        {/* JavaScript */}
        <div className='skill-card group bg-zinc-800/70 ring-1 ring-white/10 rounded-2xl p-4 md:p-5 flex items-start gap-4 hover:bg-zinc-800 transition-colors'>
          <FaJs className='shrink-0' color='#F7DF1E' size={56} />
          <p className='text-slate-200 text-sm md:text-base leading-snug'>Write modern ES6+ code, handle async flows, and craft interactive experiences.</p>
        </div>
        {/* GSAP */}
        <div className='skill-card group bg-zinc-800/70 ring-1 ring-white/10 rounded-2xl p-4 md:p-5 flex items-start gap-4 hover:bg-zinc-800 transition-colors'>
        <svg  xmlns="http://www.w3.org/2000/svg" height={100} width={130}
fill={"currentColor"} viewBox="0 0 24 24">
{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
<path d="m7.83,11.76h0s-.26,1.15-.26,1.15c-.01.06-.08.11-.15.11h-.32s-.04.02-.05.04c-.29.99-.69,1.68-1.21,2.09-.45.35-1,.51-1.73.51-.66,0-1.1-.21-1.48-.63-.5-.55-.7-1.46-.58-2.55.22-2.05,1.29-4.12,3.34-4.12.62,0,1.11.19,1.45.57.36.41.54,1.02.54,1.82,0,.07-.06.13-.13.13h-1.5c-.05,0-.1-.05-.1-.1-.01-.55-.18-.82-.5-.82-.58,0-.91.78-1.09,1.21-.25.6-.38,1.26-.35,1.92.01.3.06.73.35.91.26.16.62.05.84-.12.22-.17.4-.48.47-.75.01-.04.01-.07,0-.08-.01-.01-.04-.02-.06-.02h-.39s-.08-.02-.11-.05c-.02-.02-.03-.06-.02-.09l.26-1.14c.01-.06.07-.1.13-.11h0s2.53,0,2.53,0c0,0,.01,0,.02,0,.07,0,.11.07.11.14h0Z"></path><path d="m12.18,10.45c0,.07-.06.13-.13.13h-1.38c-.09,0-.17-.07-.17-.16,0-.4-.14-.6-.42-.6s-.47.18-.47.48c0,.34.19.65.74,1.18.72.68,1.01,1.28,1,2.08-.02,1.29-.9,2.12-2.23,2.12-.68,0-1.2-.18-1.54-.54-.35-.36-.51-.9-.48-1.59,0-.07.06-.13.13-.13h1.43s.08.02.1.05c.02.03.03.06.03.09-.02.25.03.43.13.54.06.07.15.1.26.1.26,0,.42-.19.42-.51,0-.28-.08-.53-.57-1.03-.63-.61-1.19-1.24-1.17-2.23.01-.58.24-1.1.64-1.48.43-.4,1.01-.61,1.69-.61.68,0,1.2.2,1.53.58.32.36.47.88.46,1.54h0Z"></path><path d="m16.47,15.43v-6.84c.01-.07-.05-.13-.12-.13,0,0,0,0,0,0h-2.14c-.07,0-.1.06-.12.1l-3.1,6.82h0s0,0,0,0c-.03.08.03.17.12.17h1.5c.08,0,.13-.02.16-.08l.3-.71c.04-.09.04-.1.15-.1h1.43c.1,0,.1,0,.1.1l-.03.66c0,.07.06.13.13.13,0,0,0,0,0,0h1.51s.07-.02.1-.04c.02-.02.03-.06.03-.09Zm-2.65-2.28s-.02,0-.03,0c-.02,0-.03-.02-.03-.04,0,0,0,0,0,0,0-.01,0-.02.01-.04l1.07-2.65s.02-.05.03-.08c.02-.04.04-.04.05-.01,0,.02-.12,2.72-.12,2.72-.01.1-.01.11-.11.11h-.86s0-.01,0-.01h0s0,0,0,0Z"></path><path d="m19.51,8.46h-1.14c-.06,0-.13.03-.14.1l-1.58,6.86s0,.06.02.09c.03.03.07.05.11.05h1.42c.08,0,.13-.04.14-.1,0,0,.17-.78.17-.78.01-.06,0-.11-.06-.14-.03-.01-.05-.03-.08-.04l-.25-.13-.24-.13-.09-.05s-.03-.02-.02-.04c0-.03.02-.05.05-.05h.78c.23,0,.47-.01.69-.05,1.61-.3,2.68-1.59,2.71-3.34.03-1.5-.81-2.26-2.48-2.26,0,0,0,0,0,0Zm-.39,4.08h-.03c-.07,0-.08,0-.08,0,0,0,.45-1.98.45-1.98.01-.06.01-.09-.02-.11-.05-.02-.7-.37-.7-.37-.02,0-.03-.02-.02-.04,0-.03.02-.05.05-.05h1.04c.32,0,.5.3.49.79-.01.85-.42,1.74-1.17,1.77h0Z"></path>
</svg>
          <p className='text-slate-200 text-sm md:text-base leading-snug'>Write modern ES6+ code, handle async flows, and craft interactive experiences.</p>
        </div>
        {/* React */}
        <div className='skill-card group bg-zinc-800/70 ring-1 ring-white/10 rounded-2xl p-4 md:p-5 flex items-start gap-4 hover:bg-zinc-800 transition-colors'>
          <FaReact className='shrink-0' color='#61DAFB' size={56} />
          <p className='text-slate-200 text-sm md:text-base leading-snug'>Build reusable components, manage state, and optimize rendering performance.</p>
        </div>

        {/* GitHub */}
        <div className='skill-card group bg-zinc-800/70 ring-1 ring-white/10 rounded-2xl p-4 md:p-5 flex items-start gap-4 hover:bg-zinc-800 transition-colors'>
          <FaGithub className='shrink-0' color='#ffffff' size={56} />
          <p className='text-slate-200 text-sm md:text-base leading-snug'>Version control, code reviews, and collaboration with Git and GitHub.</p>
        </div>

        {/* Node.js */}
        <div className='skill-card group bg-zinc-800/70 ring-1 ring-white/10 rounded-2xl p-4 md:p-5 flex items-start gap-4 hover:bg-zinc-800 transition-colors'>
          <DiNodejs className='shrink-0' color='#339933' size={56} />
          <p className='text-slate-200 text-sm md:text-base leading-snug'>Build robust backends and APIs with Node.js, Express, and best practices.</p>
        </div>

        {/* Express */}
        <div className='skill-card group bg-zinc-800/70 ring-1 ring-white/10 rounded-2xl p-4 md:p-5 flex items-start gap-4 hover:bg-zinc-800 transition-colors'>
          <SiExpress className='shrink-0' color='#ffffff' size={56} />
          <p className='text-slate-200 text-sm md:text-base leading-snug'>Design REST APIs, middleware, and secure routes using Express.js.</p>
        </div>

        {/* MongoDB */}
        <div className='skill-card group bg-zinc-800/70 ring-1 ring-white/10 rounded-2xl p-4 md:p-5 flex items-start gap-4 hover:bg-zinc-800 transition-colors'>
          <SiMongodb className='shrink-0' color='#10A777' size={56} />
          <p className='text-slate-200 text-sm md:text-base leading-snug'>Model data, index effectively, and write performant queries in MongoDB.</p>
        </div>
      </div>
    </div>
  )
}

export default Skills