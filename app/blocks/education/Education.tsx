'use client';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

type EducationItem = {
  institution: string;
  degree: string;
  duration: string;
};

const educationData: EducationItem[] = [
  {
    institution: 'Siddaganga Institute of Technology',
    degree: 'Bachelor of Engineering in Computer Science and Engineering.',
    duration: '2021 - 2025',
  },
  {
    institution: 'Presidency Pre University College',
    degree: "Pre-University Course (PUC) in PCMB",
    duration: '2019 - 2021',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 sm:px-10 max-w-7xl mx-auto mt-10">
     
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-4"
      >
        Education Journey
      </motion.h2>

      <p className="text-center max-w-xl mx-auto mb-16">
        My academic background and educational qualifications that have shaped my skills and knowledge.
      </p>

      
      <div className="relative flex flex-col items-center">
        
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-blue-500 z-0"></div>

       
        <div className="flex flex-col gap-24 w-full relative z-10">
          {educationData.map((edu, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`relative flex flex-col lg:flex-row ${
                  !isLeft ? 'lg:flex-row-reverse' : ''
                } items-center gap-10`}
              >
                
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20 rounded-full p-3 border-4 border-blue-500 shadow-lg">
                  <FaGraduationCap className="text-xl" />
                </div>

                
                <div className="hidden lg:block lg:w-1/2"></div>

                
                <div className=" shadow-lg rounded-xl p-6 max-w-md w-full z-10">
                  <h3 className="text-xl font-bold">{edu.institution}</h3>
                  <p className="text-blue-600 mt-2">{edu.degree}</p>
                  <div className=" mt-2 flex items-center gap-2">
                    <span>📅</span>
                    <span>{edu.duration}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
