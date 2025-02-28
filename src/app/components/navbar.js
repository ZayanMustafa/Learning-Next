import Link from 'next/link';
import { motion } from 'framer-motion'; 

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center backdrop-blur-sm bg-white/10 dark:bg-gray-900/10">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Zayyan Mustafa
        </h1>
    </nav>
  );
}