'use client';

import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen p-8 bg-transparent">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold text-white drop-shadow-lg">About Zayyan Mustafa</h2>
        <p className="mt-4 text-lg text-gray-300">
          I am a passionate Front-End Developer skilled in React, Next.js, and Tailwind CSS. Currently, I am learning full-stack development, building impactful web applications, and exploring new technologies.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-8 flex gap-6"
      >
        <div className="p-6 border border-gray-700 bg-gray-900 bg-opacity-50 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-white">My Expertise</h3>
          <p className="text-gray-300 mt-2">I specialize in creating responsive, high-performance web applications with a strong focus on UI/UX.</p>
        </div>
        <div className="p-6 border border-gray-700 bg-gray-900 bg-opacity-50 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-white">My Goals</h3>
          <p className="text-gray-300 mt-2">I aim to become a full-stack developer, contribute to open-source projects, and build innovative digital solutions.</p>
        </div>
      </motion.div>
    </section>
  );
}
