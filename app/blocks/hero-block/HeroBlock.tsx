import React from 'react'
import HeroText from './hero-text/HeroText'
import HeroImage from './hero-image/HeroImage'


const HeroBlock = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex flex-row justify-evenly items-center ml-20'>
            <div className='w-1/2'>
            <HeroText />
            </div>
            <div className='w-1/2'>
         <HeroImage />
         </div>
        </div>
    </div>
  )
}

export default HeroBlock