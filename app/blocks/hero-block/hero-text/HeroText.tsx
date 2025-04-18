// herotext.tsx
"use client";
import React, { useEffect, useState } from "react";
import { Github, Linkedin, X } from "lucide-react";

import { Mail, Download } from "lucide-react";


const HeroText = () => {
  const fullText =
    "Motivated Computer Science student with a strong interest in problem-solving and web development. Passionate about building efficient and user-friendly applications using technologies like HTML, CSS, and JavaScript. Continuously exploring new concepts in data structures, algorithms, and full-stack development. Enthusiastic about learning, growing as a developer, and contributing to impactful projects.";

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 25); 
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);
  return (
    <div className="flex flex-col justify-center max-w-2xl">
      <h1 className="text-5xl font-bold mb-4">
        Hello, I&rsquo;m <br />
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Unnati Umesh Kulkarni
        </span>
      </h1>
      <h2 className="text-2xl mb-6">Computer Science</h2>
      <p className="text-lg leading-relaxed mb-6 text-justify">
        {displayedText}
        <span className="animate-pulse">|</span>
      </p>

      <div className="flex gap-4">
        <button className="flex items-center px-4 py-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <Mail className="mr-2 h-4 w-4" /> <a href="#contact">Contact Me</a>
        </button>
        <button className="flex items-center px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition">
          <Download className="mr-2 h-4 w-4" />{" "}
          <a
            href="/UNNATI_KULKARNI_SIT.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </button>
      </div>
      <div className="flex gap-4 mt-6">
        <a
          href="https://github.com/UnnatiUmesh"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gray-100 p-3 hover:bg-blue-100 transition-all"
        >
          <Github className="text-gray-800 hover:text-blue-500 transition-colors w-5 h-5" />
        </a>

        <a
          href="https://linkedin.com/in/unnati-kulkarni-ba9355241/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gray-100 p-3 hover:bg-blue-100 transition-all"
        >
          <Linkedin className="text-gray-800  hover:text-blue-500 transition-colors w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default HeroText;
