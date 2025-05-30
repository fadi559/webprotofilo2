'use client'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import SpaceBackground from './components/SpaceBackground'
import Navbar from './components/Navbar'

const skills = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#000000' },
  { name: 'React Native', color: '#61DAFB' },
  { name: 'Node.js', color: '#339933' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'Postman', color: '#FF6C37' },
  { name: 'Xcode', color: '#147EFB' },
  { name: 'Java', color: '#007396' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'TypeScript', color: '#3178C6' }
]

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
      <SpaceBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="h-screen relative">
        <div className="relative z-20 h-full flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              style={{ opacity, scale, y }}
              className="text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            >
             Fadi Shqerat
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-3xl text-gray-300"
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
          className="backdrop-blur-sm bg-gray-900/30 p-8 rounded-2xl border border-gray-700/50"
        >
          <h2 className="text-4xl font-bold text-center mb-8 text-white">About Me</h2>
          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with expertise in building modern web applications and mobile solutions.
            With a strong foundation in both frontend and backend technologies, I create seamless user experiences
            across web and mobile platforms. My experience with React Native allows me to develop cross-platform
            mobile applications that deliver native-like performance and user experience. I combine my knowledge
            of web technologies with mobile development to create comprehensive solutions that work seamlessly
            across all devices.
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
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }
                }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.7}
                whileDrag={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="relative perspective-1000 cursor-grab active:cursor-grabbing"
              >
                <motion.div
                  className="backdrop-blur-sm bg-gray-900/30 p-6 rounded-lg shadow-lg text-center border border-gray-700/50 hover:border-purple-500 transition-colors h-24 flex items-center justify-center"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.p 
                    className="text-xl font-semibold select-none"
                    style={{ color: skill.color }}
                  >
                    {skill.name}
                  </motion.p>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity"
                    style={{
                      transform: "translateZ(-1px)",
                    }}
                  />
                </motion.div>
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
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* React Native Project */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="backdrop-blur-sm bg-gray-900/30 rounded-lg shadow-lg overflow-hidden border border-gray-700/50 hover:border-purple-500 transition-colors"
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">React Native Project</h3>
                <p className="text-gray-300 mb-4">
                  A mobile application built with React Native, showcasing modern mobile development practices and user interface design.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React Native</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Mobile</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">UI/UX</span>
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
              className="backdrop-blur-sm bg-gray-900/30 rounded-lg shadow-lg overflow-hidden border border-gray-700/50 hover:border-purple-500 transition-colors"
            >
              <div className="h-48 bg-gradient-to-r from-green-500 to-blue-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Next.js Project</h3>
                <p className="text-gray-300 mb-4">
                  A modern web application developed with Next.js, demonstrating server-side rendering and optimal performance.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">SSR</span>
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
              className="backdrop-blur-sm bg-gray-900/30 rounded-lg shadow-lg overflow-hidden border border-gray-700/50 hover:border-purple-500 transition-colors"
            >
              <div className="h-48 bg-gradient-to-r from-yellow-500 to-red-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Node.js Project</h3>
                <p className="text-gray-300 mb-4">
                  A robust backend application built with Node.js, featuring efficient server-side operations and API development.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">Backend</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">API</span>
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
          <div className="backdrop-blur-sm bg-gray-900/30 p-8 rounded-2xl border border-gray-700/50">
            <h2 className="text-4xl font-bold mb-8 text-white">Get In Touch</h2>
            <p className="text-gray-300 mb-8">
              I'm always open to new opportunities and collaborations.
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
