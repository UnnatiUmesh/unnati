import React from 'react'

import AboutText from './about-text/AboutText'
import AboutSkills from './about-skills/AboutSkills'


const AboutBlock = () => {
  return (
    <div id="about" className='container mx-auto px-4 mt-30'>
         <h2 className="text-4xl font-extrabold text-center mb-4 tracking-widest">
      ABOUT ME
    </h2>
    <p className="text-center text-lg mb-12">
      Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
    </p>
        <div className='flex flex-row justify-between items-start mt-20 ml-20 gap-10'>
            <div className='w-1/2'>
            <AboutText />
            </div>
            <div className='w-1/2'>
            
            <h3 className="text-2xl text-center font-bold mb-4">My Skills</h3>
           
         <AboutSkills />
         </div>
        </div>
    </div>
  )
}

export default AboutBlock;