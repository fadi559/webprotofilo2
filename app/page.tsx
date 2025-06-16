'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Aurora from './components/Aurora'
import TiltedCard from './components/TiltedCard'

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
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <main ref={containerRef} className="min-h-screen relative">
      <ScrollProgress />
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <Aurora />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Fadi Shqerat
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Full Stack Developer
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </motion.div>
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
      <section id="skills" className="py-12 md:py-20 relative z-10">
        <div className="section-gradient"></div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto px-4"
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
            {[
              'React',
              'Next.js',
              'React Native',
              'Node.js',
              'MongoDB',
              'Firebase',
              'TypeScript',
              'TailwindCSS',
              'Postman',
              'Xcode',
              'Java',
              'JavaScript',
              'Sanity',
              'Vercel',
              'Prisma',
              'PostgreSQL',
              'Stripe',
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { 
                    duration: 0.3,
                    type: "spring",
                    stiffness: 200
                  }
                }}
                className="skill-card group"
              >
                <div className="skill-card-inner">
                  <motion.p 
                    className="text-lg md:text-xl font-semibold text-white relative z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {skill}
                  </motion.p>
                  <motion.div 
                    className="skill-background"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ 
                      scale: 1.2,
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }}
                  />
                  <motion.div 
                    className="skill-particles"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="particle"
                        animate={{
                          y: [0, -30, 0],
                          x: [0, Math.random() * 40 - 20, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.15,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </motion.div>
                  <motion.div 
                    className="skill-rings"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ 
                      scale: 1.2,
                      opacity: 1,
                      transition: { duration: 0.5 }
                    }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="ring"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.2, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-20 relative z-10">
        <div className="section-gradient"></div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto px-4"
        >
          <h2 className="section-title">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TiltedCard
              title="React Native Job Search App"
              description="A mobile application built with React Native for job searching and application tracking."
              image="/AppIcon~ios-marketing.png"
              tags={['React Native', 'node.Js', 'Redux']}
              githubLink="https://github.com/fadi559/Appjob"
              
            />
            <TiltedCard
              title="E-commerce Web App"
              description="A full-stack e-commerce platform built with Next.js and node.Js integration."
              image="/screenShotTemo.png"
              tags={['Next.js', 'Stripe', 'MongoDB,Node.JS,Prisma,']}
              githubLink="https://github.com/fadi559/temoupro"
              demoLink="https://temoupro.vercel.app/"
            />
            <TiltedCard
              title="Node.js Backend API"
              description="A robust RESTful API built with Node.js and Express for a social media platform."
             image="/AppIcon~ios-marketing.png"
              tags={['Node.js', 'Express', 'MongoDB']}
              githubLink="https://github.com/fadi559/FadiNodejss"
             
            />
          </div>
        </motion.div>
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

      <FloatingActionButton />
    </main>
  )
}

export default Home
