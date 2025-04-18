
'use client';
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image"; // ✅ Import Next.js Image
import p1 from "../../../public/p1.png";
import p2 from "../../../public/p2.png";
import p3 from "../../../public/p3.png";

type Project = {
  title: string;
  description: string;
  image: string | StaticImageData;
  tech: string[];
  links: {
    live: string;
    github: string;
  };
};

const projects: Project[] = [
  {
    title: "HackerNews-Server",
    description:
"The backend powers a social news platform where users can sign up, post content, like and comment on posts. It features JWT-based authentication, robust access control, and well-structured RESTful APIs for seamless content management. With support for pagination, user-specific feeds, and content interaction tracking, the project offers a scalable and secure foundation for engaging, user-generated content.",
    image: p1, 
    tech: ["Node.js", "TypeScript", "PostgreSQL"],
    links: {
      live: "https://hackernews.livelypond-7a5ff4b2.centralindia.azurecontainerapps.io",
      github: "https://github.com/UnnatiUmesh/hackernews",
    },
  },
  {
    title: "ESG",
    description:
      "ESG investing focuses on companies excelling in environmental, social, and governance practices. Studies show high-ESG firms are more profitable, less volatile, and deliver stronger long-term returns.",
    image: p2,
    tech: ["Python", "Flask", "Finstara"],
    links: {
      live: "#",
      github: "https://github.com/UnnatiUmesh/ESG/tree/master",
    },
  },
  
  {
    title: "Ecommerce",
    description:
      "A full-stack eCommerce platform built with React, Node.js, and MongoDB. It features secure user authentication, product management, dynamic cart and checkout, and seamless integration of payments—offering a modern, scalable solution for online retail.",
    image: p3, // ✅ String path (public folder)
    tech: ["JavaScript", "Node.js", "MongoDB"," React.js"],
    links: {
      live: "#",
      github: "https://github.com/UnnatiUmesh/Ecommerce",
    },
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-10 max-w-7xl mt-10 ml-20">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="flex flex-col items-center gap-20">
        {projects.map((project, i) => {
          const isEven = i % 2 === 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isEven ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`flex flex-col lg:flex-row ${
                !isEven ? "lg:flex-row-reverse" : ""
              } items-center gap-10`}
            >
              {/* Project Image */}
              <div className="w-full max-w-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl"
                  width={400}
                  height={200}
                />
              </div>

              {/* Project Info */}
              <div className="flex-1 text-left">
                <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>
                <p className="mb-6 text-justify">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-4 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Live
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
