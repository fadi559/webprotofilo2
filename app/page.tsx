'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { 
  SiTypescript, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiRedux,
  SiFirebase,
  SiGit,
  SiVercel,
  SiPostman,
  SiStripe,
  SiXcode,
  SiAndroidstudio,
  SiHtml5,
  SiCss3,
  SiSanity,
  SiPrisma
} from "react-icons/si";
import { FaReact, FaLayerGroup, FaChartLine } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import AnimatedProjects from './components/AnimatedProjects'
import { TypeAnimation } from 'react-type-animation';
import { AuroraBackground } from './components/AuroraBackground'
import BackgroundBeams from './components/BackgroundBeams';


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
        <AuroraBackground>
        <motion.div
          style={{ opacity, scale, y }}
          className="fixed inset-0 z-0"
        >
          {/* <Aurora
            amplitude={0.5}
            blend={0.5}
            colorStops={[
              { color: "#ff0000", position: 0 },
              { color: "#00ff00", position: 0.5 },
              { color: "#0000ff", position: 1 },
            ]}
          /> */}
        </motion.div>

        <div className="relative z-10">
          <Navbar />
          
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
            <div className="text-center z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-6xl font-bold mb-4 text-white"
                >
                  FadiShqerat
                </motion.h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl mb-8"
              >
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    1000,
                    'React Developer',
                    1000,
                    'Next.js Developer',
                    1000,
                    'Node.js Developer',
                    1000,
                     'ReactNative Developer',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-white"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex justify-center gap-4"
              >
                <motion.a
                  href="https://github.com/fadi559"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub className="text-2xl" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/fadi-shqerat-60877a254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin className="text-2xl" />
                </motion.a>
              </motion.div>
            </div>
            <motion.div
              className="absolute inset-0 -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              
            
            </motion.div>
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
              {[
                { icon: <SiTypescript className="text-4xl" />, name: "TypeScript" },
                { icon: <SiJavascript className="text-4xl" />, name: "JavaScript" },
                { icon: <SiReact className="text-4xl" />, name: "React" },
                { icon: <FaReact className="text-4xl" />, name: "React Native" },
                { icon: <SiNextdotjs className="text-4xl" />, name: "Next.js" },
                { icon: <SiNodedotjs className="text-4xl" />, name: "Node.js" },
                { icon: <SiExpress className="text-4xl" />, name: "Express" },
                { icon: <SiMongodb className="text-4xl" />, name: "MongoDB" },
                { icon: <BiLogoPostgresql className="text-4xl" />, name: "PostgreSQL" },
                { icon: <SiPrisma className="text-4xl" />, name: "Prisma" },
                { icon: <SiTailwindcss className="text-4xl" />, name: "Tailwind CSS" },
                { icon: <SiRedux className="text-4xl" />, name: "Redux" },
                { icon: <FaLayerGroup className="text-4xl" />, name: "Zustand" },
                { icon: <SiFirebase className="text-4xl" />, name: "Firebase" },
                { icon: <SiSanity className="text-4xl" />, name: "Sanity" },
                { icon: <SiPostman className="text-4xl" />, name: "Postman" },
                { icon: <SiGit className="text-4xl" />, name: "Git" },
                { icon: <SiVercel className="text-4xl" />, name: "Vercel" },
                { icon: <SiStripe className="text-4xl" />, name: "Stripe" },
                { icon: <SiXcode className="text-4xl" />, name: "Xcode" },
                { icon: <SiAndroidstudio className="text-4xl" />, name: "Android Studio" },
                { icon: <SiHtml5 className="text-4xl" />, name: "HTML5" },
                { icon: <SiCss3 className="text-4xl" />, name: "CSS3" },
                { icon: <FaChartLine className="text-4xl" />, name: "Umami" },
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
          // <AnimatedProjects />

      
        {/* Download CV Section */}
        <section className="py-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto px-6 text-center bg-black/40 border border-white/10 backdrop-blur-md rounded-2xl p-10 shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Download My CV
            </h2>
            <p className="text-neutral-300 text-base md:text-lg mb-6">
              Want to know more about my experience and skills? Download my CV to learn more.
            </p>
            <a
              href="/NewstCV.pdf"
              download
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              📄 Download CV
            </a>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto px-6 text-center bg-black/40 border border-white/10 backdrop-blur-md rounded-2xl p-10 shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-neutral-300 text-base md:text-lg mb-8">
              Have a project in mind? Let's discuss how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:fadishqerat54@icloud.com"
                className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-full text-white font-semibold shadow-md"
              >
                📧 Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/fadi-shqerat-60877a254"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black hover:bg-neutral-200 transition-colors px-6 py-3 rounded-full font-semibold shadow-md"
              >
                🔗 LinkedIn
              </a>
            </div>
          </motion.div>
        </section>
        </div>
        <FloatingActionButton />

         </AuroraBackground>
      </main>
   
  )
}

export default Home
