'use client'

import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-20 px-4 max-w-6xl mx-auto relative z-10">
      <div className="absolute inset-0 -z-10 h-full bg-gradient-to-b from-gray-900/50 to-gray-800/50 backdrop-blur-sm"></div>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="glass p-6 md:p-8 rounded-2xl shadow-2xl relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 gradient-text">About Me</h2>
        <p className="text-gray-300 text-base md:text-lg text-center max-w-3xl mx-auto leading-relaxed">
          Im a passionate full-stack developer with expertise in building modern web and mobile 
          applications. My strong foundation in both frontend and backend technologies enables me 
          to deliver seamless, high-performance user experiences across platforms. I specialize in
          React Native for cross-platform mobile apps, ensuring native-like performance and a polished
          user experience. On the web, I leverage frameworks like React and Next.js to craft interactive,
          dynamic interfaces. On the backend, I build scalable APIs using Node.js, Express, and MongoDB.
          I thrive on turning ideas into robust, real-world solutions that delight users and exceed expectations.
        </p>
      </motion.div>
    </section>
  )
}

export default AboutSection 