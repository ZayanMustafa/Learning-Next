'use client';
import { useEffect, useRef } from "react";

export default function Skills() {
  const skills = {
    frontend: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Next.js"],
    backend: ["Node.js", "Express.js", "Python", "Django", "REST APIs"],
    database: ["MongoDB", "PostgreSQL", "MySQL", "Firestore"],
    mobile: ["React Native (Learning)", "Expo", "Swift (Learning)"],
    devTools: ["Git", "GitHub", "Firebase", "Docker", "VS Code", "Postman"],
  };

  const skillsContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const skillsContainer = skillsContainerRef.current;
      if (skillsContainer) {
        const rect = skillsContainer.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          skillsContainer.classList.add("animate-scroll");
        } else {
          skillsContainer.classList.remove("animate-scroll");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="skills" className="p-10  bg-transparent">
      <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
      <div className="mt-5 overflow-hidden border-2 border-gray-300 rounded-lg">
        <div
          ref={skillsContainerRef}
          className="skills-container flex flex-nowrap space-x-8 py-10"
        >
          {Object.entries(skills).map(([category, skillsList]) => (
            <div key={category} className="skills-category min-w-max">
              <h3 className="text-3xl font-semibold capitalize mb-4">{category}</h3>
              <div className="flex flex-wrap mt-2">
                {skillsList.map((skill, index) => (
                  <span
                    key={index}
                    className="m-4 px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-lg text-xl hover:bg-blue-500 hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}