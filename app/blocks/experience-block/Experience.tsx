
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type ExperienceItem = {
  title: string;
  date: string;
  description: string;
};

const experiences: ExperienceItem[] = [
  {
    title: 'Intern at StackLane',
    date: 'Mar 2025 - Present',
    description:
      'I build responsive, modern websites and reusable UI components for clients using Next.js and Tailwind CSS, focusing on clean design and seamless user experiences. Collaborate with the team to implement user-friendly features and designs.',
  },
  {
    title: 'DSA Internship at GeeksforGeeks',
    date: 'Aug 2023 - Nov 2023',
    description:
      'During my DSA Internship at GeeksforGeeks, I focused on solving complex algorithmic problems, optimizing data structures, and contributing to the creation and review of DSA-related content to help learners improve their problem-solving skills.',
  },
  {
    title: 'Started Learning Web Development',
    date: 'Dec 2023',
    description:
      'My web development journey began with learning HTML, CSS, and JavaScript. I started building small projects and learning the basics of web development.',
  },
];

function ExperienceBlock({ item }: { item: ExperienceItem }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-12 pl-6 relative"
      >
        {/* Dot */}
        <div className="absolute left-[-0.875rem] top-2 w-4 h-4 bg-gray-500 rounded-full border-2 border-white" />
  
        {/* Content */}
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="text-sm  mb-2">{item.date.toUpperCase()}</p>
        <p >{item.description}</p>
      </motion.div>
    );
  }
  

export default function Experience() {
  return (
    <div id="experience" className="max-w-4xl mx-auto px-4 py-12 mt-30">
      <h2 className="text-4xl font-extrabold text-center mb-10 tracking-widest">
      EXPERIENCE
    </h2>
      <div className="border-l-2 pl-6 relative text-justify">
        {experiences.map((item, idx) => (
          <ExperienceBlock key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}
