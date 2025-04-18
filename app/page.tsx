import NavigationBar from '@/components/navigation-bar/NavigationBar'
import React from 'react'
import HeroBlock from './blocks/hero-block/HeroBlock'
import AboutBlock from './blocks/about-block/AboutBlock'
import Experience from './blocks/experience-block/Experience'
import ProjectsSection from './blocks/project-block/Projects'
import EducationSection from './blocks/education/Education'
import ContactSection from './blocks/contacts/Contacts'
import Footer from '@/components/footer-bar/Footer'
const Rootpage = () => {
  return (
   <>
    <div className='sticky top-0 z-30 b-white-80 py-4 backdrop:blur-xl'>
    <NavigationBar/>
    </div>
    
    <HeroBlock />
    
    
    <AboutBlock />
   
    
    <Experience />
    <ProjectsSection />
    <EducationSection />
    <ContactSection />
    <Footer />
  
    
   </>
  )
}

export default Rootpage;