'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface TiltedCardProps {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  demoUrl?: string;
  tags: string[];
}

const TiltedCard = ({ title, description, image, githubUrl, demoUrl, tags }: TiltedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-full rounded-xl overflow-hidden group"
    >
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 md:bg-black/0 md:group-hover:bg-black/60 transition-all duration-300">
          <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-white">
            <h3 className="text-lg md:text-xl font-bold mb-2 text-center">{title}</h3>
            <p className="text-xs md:text-sm text-center mb-2 opacity-0 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              {description}
            </p>
            <div className="flex flex-wrap gap-1 justify-center mb-2">
              {tags.map((tag, index) => (
                <span key={index} className="bg-white/20 px-1.5 py-0.5 rounded text-[10px] md:text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <FaGithub className="text-lg" />
              </a>
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <FaExternalLinkAlt className="text-lg" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TiltedCard; 