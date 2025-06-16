'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface TiltedCardProps {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  demoUrl: string;
}

const TiltedCard = ({ title, description, image, githubUrl, demoUrl }: TiltedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden group"
    >
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 md:bg-black/0 md:group-hover:bg-black/60 transition-all duration-300">
          <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">{title}</h3>
            <p className="text-sm md:text-base text-center mb-4 opacity-0 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              {description}
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <FaExternalLinkAlt className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TiltedCard; 