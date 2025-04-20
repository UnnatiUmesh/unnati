"use client";
import React from "react";


import Link from "next/link";
import ThemeToggle from "../Theme";

const NavigationBar = (props: { className?: string }) => {
  return (
    <div className={`container mx-auto py-6 ${props.className||''}`}>
 <div className="bg-transparent flex flex-row justify-between items-center">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2 items-center text-2xl ml-20">
          <span className="text-green-400  text-2xl">
            {"{"}
            <span className="text-blue-500">UK</span>
            {"}"}
          </span>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Unnati
          </h2>
          <div className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Unnati
          </div>
        </div>

        
      </div>
      <nav className="flex flex-row gap-8 items-center">
          <Link href="#">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#education">Education</Link>
          <Link href="#contact">Contact</Link>
          <ThemeToggle />
        </nav>
    </div>
    </div>
  );
};

export default NavigationBar;


