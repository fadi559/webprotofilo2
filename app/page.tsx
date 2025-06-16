'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Aurora from './components/Aurora'
import TiltedCard from './components/TiltedCard'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
      className="fab"
    >
      <a href="#home" className="text-white">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </a>
    </motion.div>
  );
};

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  return (
    <main ref={containerRef} className="min-h-screen bg-black text-white">
      <motion.div
        style={{ opacity, scale, y }}
        className="fixed inset-0 z-0"
      >
        <Aurora
          amplitude={0.5}
          blend={0.5}
          colorStops={[
            { color: "#ff0000", position: 0 },
            { color: "#00ff00", position: 0.5 },
            { color: "#0000ff", position: 1 },
          ]}
        />
      </motion.div>

      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center p-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold mb-4"
            >
              Hi, I&apos;m Fadi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8"
            >
              Full Stack Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center gap-4"
            >
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <FaTwitter className="text-2xl" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-20 relative z-10">
          <div className="section-gradient"></div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto px-4"
          >
            <h2 className="section-title">About Me</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass p-6 md:p-8 rounded-xl"
            >
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                I&apos;m a passionate Full Stack Developer with expertise in React, Next.js, and Node.js.
                I love creating modern, responsive web applications and mobile apps that provide
                exceptional user experiences.
              </p>
              <p className="text-lg md:text-xl text-gray-300">
                With a strong foundation in both frontend and backend development,
                I strive to build scalable and efficient solutions that solve real-world problems.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-8 bg-black/50">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <SiTypescript className="text-4xl" />, name: "TypeScript" },
              { icon: <SiJavascript className="text-4xl" />, name: "JavaScript" },
              { icon: <SiReact className="text-4xl" />, name: "React" },
              { icon: <SiNodedotjs className="text-4xl" />, name: "Node.js" },
              { icon: <SiMongodb className="text-4xl" />, name: "MongoDB" },
              { icon: <SiTailwindcss className="text-4xl" />, name: "Tailwind" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="skill-card group"
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="text-lg font-semibold mt-2">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-8">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <TiltedCard
              title="React Native App"
              description="A mobile application built with React Native"
              image="/screenShotTemo.png"
              tags={["React Native", "TypeScript", "Firebase"]}
              githubLink="https://github.com/yourusername/react-native-app"
              demoLink="https://your-app-demo.com"
            />
            <TiltedCard
              title="Node.js Backend"
              description="A RESTful API built with Node.js and Express"
              image="/screenShotTemo.png"
              tags={["Node.js", "Express", "MongoDB"]}
              githubLink="https://github.com/yourusername/nodejs-backend"
              demoLink="https://your-api-demo.com"
            />
          </div>
        </section>

        {/* Download CV Section */}
        <section className="py-12 md:py-20 relative z-10">
          <div className="section-gradient"></div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto px-4 text-center"
          >
            <h2 className="section-title">Download My CV</h2>
            <p className="text-gray-300 text-base md:text-lg mb-8">
              Want to know more about my experience and skills? Download my CV to learn more.
            </p>
            <a
              href="/cv.pdf"
              download
              className="cv-download"
            >
              Download CV
            </a>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20 relative z-10">
          <div className="section-gradient"></div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto px-4 text-center"
          >
            <h2 className="section-title">Get In Touch</h2>
            <p className="text-gray-300 text-base md:text-lg mb-8">
              Have a project in mind? Let's discuss how we can work together.
            </p>
            <div className="contact-buttons">
              <a
                href="mailto:your.email@example.com"
                className="btn-primary"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/fadi-shqerat-60877a254 "
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </section>
      </div>

      <FloatingActionButton />
    </main>
  )
}

export default Home
