"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const skillsData = [
  { name: "C", category: "Languages", icon: "/icons/c.svg", proficiency: 90 },
  { name: "C++", category: "Languages", icon: "/icons/cpp.svg", proficiency: 90 },
  { name: "JavaScript", category: "Languages", icon: "/icons/javascript.svg", proficiency: 85 },
  { name: "React", category: "Frontend", icon: "/icons/react.svg", proficiency: 75 },
  { name: "Tailwind", category: "Frontend", icon: "/icons/tailwind.svg", proficiency: 75 },
  { name: "Node.js", category: "Backend", icon: "/icons/node.svg", proficiency: 80 },
  { name: "Docker", category: "DevOps", icon: "/icons/docker.svg", proficiency: 70 },
  { name: "HTML", category: "Frontend", icon: "/icons/html5.svg", proficiency: 80 },
  {name:"Git", category:"DevOps", icon:"/icons/git.svg", proficiency: 80},
  {name:"Nextjs", category:"Frontend", icon:"/icons/nextjs.svg", proficiency: 70},
  {name:"TypeScript", category:"Languages", icon:"/icons/typescript.svg", proficiency: 70},
  {name:"PostgreSQL", category:"Backend", icon:"/icons/postgres.svg", proficiency: 70},
];

const categories = ["All Skills", "Languages", "Frontend", "Backend", "DevOps"];

const SkillsSection = () => {
  const [selected, setSelected] = useState("All Skills");

  const filteredSkills =
    selected === "All Skills"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selected);

  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-4"
      >
        My Skills
      </motion.h2>
      <p className="text-center  mb-10 max-w-2xl mx-auto">
        A curated collection of my technical skills and proficiencies developed through education, personal projects, and hands-on experience.
      </p>

   
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all ${
              selected === cat
                ? "bg-blue-600  shadow-md"
                : " hover:bg-blue-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.15 }}
        viewport={{ once: true }}
      >
        {filteredSkills.map((skill, idx) => (
          <motion.div
            key={idx}
            className=" p-6 rounded-xl shadow hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
            <p className=" text-sm mb-2">Proficiency</p>
            <div className="w-full  rounded-full h-2">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-green-400"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
            <p className="text-right text-sm  mt-1">{skill.proficiency}%</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
