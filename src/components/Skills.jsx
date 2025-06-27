import React from 'react'

import { FaCss3,FaFigma,FaHtml5,FaJs,FaReact ,FaGithub,FaGoogle,FaAmazon} from 'react-icons/fa6'
import {SiMongodb} from 'react-icons/si';

const Experience = () => {
  return (
    <div id='Skills' className='text-white p-10 md:p-20'>
      <h1 className='text-2xl md:text-4xl font-bold text-teal-400 '>Technical Skills</h1>
      <div className='flex flex-wrap items-center justify-around'>

        <div className='flex flex-wrap md:w-1/2 gap-5  md:px-1'> 
        <span className=' bg-zinc-700 flex items-center justify-evenly rounded-2xl md:px-1'> 
          <FaHtml5 color='#E34F26' size={100}/>
          <p className='mx-1'> HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content.</p>
        </span>
        <span className=' bg-zinc-700 md:px-1 flex items-center rounded-2xl'> 
          <FaCss3 color='#1572B6' size={100} />
          <p className='mx-1'>CSS is a stylesheet language used to describe the presentation of a document written in HTML or XML . CSS describes how elements should be rendered on screen,or on other media.</p>
        </span>
        <span className=' bg-zinc-700 md:px-1 flex items-center rounded-2xl'> 
        <FaJs color='#F7DF1E' size={100} />
        <p className='mx-1'>JS allows developers to create a dynamic and interactive web page to interact with visitors and execute complex actions. </p>
        </span>
        <span className=' bg-zinc-700 md:px-1 flex items-center rounded-2xl'> 
        <FaReact color='#61DAFB' size={100} />
        <p className='mx-1'> React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM</p>
        </span>
        <span className=' bg-zinc-700 md:px-1 flex items-center rounded-2xl'> 
        <FaGithub color='black' size={100} />
        <p className='mx-1'>GitHub is a developer platform that allows developers to create, store, manage and share their code.</p>
        </span>
        <span className=' bg-zinc-700 md:px-1 flex items-center rounded-2xl'> 
        <FaFigma color='#F24E1E' size={100} />
        <p className='mx-1'>Figma Design is for people to create, share, and test designs for websites, mobile apps, and other digital products and experiences.</p>
        </span>
        <span className=' bg-zinc-700 md:px-1 flex items-center rounded-2xl'> 
        <SiMongodb color='#E34F26' size={100} />
        <p className='mx-1'>The MongoDB database has a flexible data model that enables you to store unstructured data, and it provides full indexing support, and replication with rich and intuitive APIs.</p>
        </span>
        </div>

      </div>
    </div>
  )
}

export default Experience