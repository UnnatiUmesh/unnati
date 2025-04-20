"use client";

import { motion } from "framer-motion";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-20 mt-20">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        About Me
      </motion.h2>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2  p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Who I Am</h2>
          <p className=" text-lg mb-6 text-justify">
            Hey there! I &rsquo;m Unnati Umesh Kulkarni,{" "}
            <strong>a passionate Computer Science student</strong> from India
            with a strong interest in problem-solving, software development, and
            web technologies.I&rsquo;m actively building skills in
            <strong>HTML, CSS, JavaScript, React.js, and Next.js</strong>, and I
            enjoy turning ideas into responsive, user-friendly web experiences.
            I&rsquo;m also exploring backend technologies and aiming to grow as
            a full-stack developer. Coding and problem-solving through code are
            my passions, and I am excited to collaborate with talented
            programmers and expand my knowledge even more!
          </p>
          <p className="font-semibold ">
            Currently pursuing Bachelor of Engineering in Computer Science at{" "}
            <strong>Siddaganga Institute of Technology,Tumkur</strong>.
          </p>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: "🧩",
              title: "Problem Solver",
              description:
                "Approaching complex coding challenges with analytical thinking and persistence.",
            },
            {
              icon: "📖",
              title: "Continuous Learner",
              description:
                "Passionate about staying updated with the latest technologies and best practices.",
            },
            {
              icon: "🧠",
              title: "Creative Thinker",
              description:
                "Finding innovative solutions by thinking outside the box.",
            },
            {
              icon: "🎓",
              title: "Academic Focus",
              description:
                "Pursuing a Bachelor of Engineering in Computer Science.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-2xl shadow p-6 flex flex-col gap-3"
            >
              <div className="text-blue-500 text-3xl">{item.icon}</div>
              <h3 className="text-xl font-semibold ">{item.title}</h3>
              <p className="text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
