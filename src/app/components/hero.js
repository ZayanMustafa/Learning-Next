"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const roles = [
    "Full-Stack Developer specializing in React & Next.js",
    "Front-End Engineer focused on modern web experiences",
    "JavaScript Developer building scalable applications",
    "React Native Developer creating cross-platform apps",
    "UI/UX Enthusiast crafting pixel-perfect interfaces"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      {/* Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:p-16 lg:p-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm Zayyan Mustafa
            <span className="text-blue-500 ml-3">👋</span>
          </h1>

          <div className="flex items-center mb-8">
            <div className="h-1 w-16 bg-blue-500 mr-4" />
            <motion.p
              key={index}
              className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              I am {roles[index]}
            </motion.p>
          </div>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            Crafting performant web solutions with 2+ years of experience in React ecosystem.
            Passionate about clean code, user-centric design, and cutting-edge technologies.
          </p>
        </motion.div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 relative">
  <div
    className="w-full h-full bg-cover bg-center opacity-90"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
      borderRadius: "50%"
    }}
  />
</div>
    </section>
  );
}