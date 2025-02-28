import { FaGithub, FaLinkedin, FaYoutube, FaDev } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="p-4 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-2 md:mb-0">
          © 2025 Zayyan Mustafa | All Rights Reserved
        </p>

        <div className="flex space-x-4">
          <a
            href="https://github.com/ZayanMustafa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/zayyanmustafa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/@ZayyanMustafaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
          <a
            href="https://dev.to/zayyanmustafa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaDev className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}