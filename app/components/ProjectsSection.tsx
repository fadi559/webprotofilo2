// 'use client'

import { motion } from 'framer-motion';
import TiltedCard from './TiltedCard';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 md:py-20 px-4 max-w-6xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 gradient-text">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* React Native Project */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              delay: 0.2,
              type: "spring",
              stiffness: 50
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass rounded-lg overflow-hidden card-hover p-4"
          >
            <TiltedCard
              image="/AppIcon~ios-marketing.png"
              title="React Native Job Search App"
              description="A job search mobile app with Face ID login and advanced filters"
              tags={["React Native", "Node.js", "MongoDB"]}
              githubUrl="https://github.com/fadi559/Appjob"
              demoUrl="https://github.com/fadi559/Appjob"
            />
          </motion.div>

          {/* Next.js Project */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              delay: 0.4,
              type: "spring",
              stiffness: 50
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass rounded-lg overflow-hidden card-hover p-4"
          >
            <TiltedCard
              image="/screenShotTemo.png"
              title="Next.js E-commerce Platform"
              description="A full-stack e-commerce platform with real-time inventory management"
              tags={["Next.js", "TypeScript", "Prisma", "PostgreSQL"]}
              githubUrl="https://github.com/fadi559/Appjob"
              demoUrl="https://github.com/fadi559/Appjob"
            />
          </motion.div>

          {/* Node.js Project */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              delay: 0.6,
              type: "spring",
              stiffness: 50
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass rounded-lg overflow-hidden card-hover p-4"
          >
            <TiltedCard
              image="/AppIcon~ios-marketing.png"
              title="Node.js Backend API"
              description="A scalable REST API with authentication and real-time features"
              tags={["Node.js", "Express", "MongoDB", "Socket.io"]}
              githubUrl="https://github.com/fadi559/Appjob"
              demoUrl="https://github.com/fadi559/Appjob"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection; 