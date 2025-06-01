'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Navbar from './components/Navbar'
import AstronautSpaceBackground from './components/AstronautSpaceBackground'

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100])

  return (
    <main ref={containerRef} className="min-h-screen relative">
      <AstronautSpaceBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-gray-900/30 z-0"></div>
        <div className="relative z-20 h-full flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              style={{ opacity, scale, y }}
              className="text-8xl font-bold mb-4 gradient-text"
            >
              Fadi Shqerat
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-3xl text-gray-300 mb-8"
            >
              Full Stack Developer
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="glass p-8 rounded-2xl shadow-2xl"
        >
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">About Me</h2>
          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto leading-relaxed">
           Im a passionate full-stack developer with expertise in building modern web and mobile 
           applications. My strong foundation in both frontend and backend technologies enables me 
           to deliver seamless, high-performance user experiences across platforms. I specialize in
            React Native for cross-platform mobile apps, ensuring native-like performance and a polished
             user experience. On the web, I leverage frameworks like React and Next.js to craft interactive
             , dynamic interfaces. On the backend, I build scalable APIs using Node.js, Express, and MongoDB.
              I thrive on turning ideas into robust, real-world solutions that delight users and exceed expectations.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto px-4"
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'React', 'Next.js', 'React Native', 'Node.js',
              'MongoDB', 'Firebase', 'Postman', 'Xcode',
              'Java', 'JavaScript', 'TypeScript'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="glass p-6 rounded-lg text-center card-hover"
              >
                <p className="text-xl font-semibold text-white">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* React Native Project */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-lg overflow-hidden card-hover"
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">React Native Project</h3>
                <p className="text-gray-300 mb-4">
                  A mobile application built with React Native, showcasing modern mobile development practices.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React Native</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Mobile</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">View Demo</a>
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">GitHub</a>
                </div>
              </div>
            </motion.div>

            {/* Next.js Project */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass rounded-lg overflow-hidden card-hover"
            >
              <div className="h-48 bg-gradient-to-r from-green-500 to-blue-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Next.js Project</h3>
                <p className="text-gray-300 mb-4">
                  A modern web application developed with Next.js, demonstrating server-side rendering.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">View Demo</a>
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">GitHub</a>
                </div>
              </div>
            </motion.div>

            {/* Node.js Project */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass rounded-lg overflow-hidden card-hover"
            >
              <div className="h-48 bg-gradient-to-r from-yellow-500 to-red-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Node.js Project</h3>
                <p className="text-gray-300 mb-4">
                  A robust backend application built with Node.js, featuring efficient server-side operations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">Backend</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">View Demo</a>
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">GitHub</a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <div className="glass p-8 rounded-2xl shadow-2xl">
            <h2 className="text-4xl font-bold mb-8 gradient-text">Get In Touch</h2>
            <p className="text-gray-300 mb-8">
              I&apos;m always open to new opportunities and collaborations.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:your.email@example.com"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
