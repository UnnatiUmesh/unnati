const skills = [
    "JavaScript", "TypeScript", "Node.js", "Next.js", "React.js",
    "Python", "C++", "C", "MongoDB", "MySQL", "HTML", "CSS", "TailwindCSS"
  ];
  
  const AboutSkills = () => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 px-6 py-2 rounded-md text-sm w-full text-center "
          >
            {skill}
          </span>
        ))}
      </div>
    );
  };
  
  export default AboutSkills;
  