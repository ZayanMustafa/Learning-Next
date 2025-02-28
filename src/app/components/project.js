'use client'; 
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaYoutube } from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "Custom Project 1",
    description: "A brief description of the project.",
    repoLink: "https://github.com/ZayanMustafa/project1",
    liveDemo: "https://project1.live",
    youtubeDemo: "https://youtube.com/demo1"
  },
  {
    id: 2,
    name: "Custom Project 2",
    description: "Another project description.",
    repoLink: "https://github.com/ZayanMustafa/project2",
    liveDemo: "https://project2.live",
    youtubeDemo: "https://youtube.com/demo2"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="p-10">
      <h2 className="text-4xl font-bold text-center text-white drop-shadow-lg mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="p-6 bg-gray-800 shadow-lg rounded-lg border border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white">{project.name}</h3>
            <p className="text-gray-300 mt-2">{project.description || "No description available"}</p>
            <div className="flex gap-4 mt-3">
              {project.repoLink && (
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                  <FaGithub size={24} />
                </a>
              )}
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500">
                  <FaExternalLinkAlt size={24} />
                </a>
              )}
              {project.youtubeDemo && (
                <a href={project.youtubeDemo} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-500">
                  <FaYoutube size={24} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}