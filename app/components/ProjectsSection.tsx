'use client'

import { motion } from 'framer-motion'
import TiltedCard from './TiltedCard'

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
              imageSrc="/images/react-native-project.jpg"
              altText="React Native Project"
              captionText="React Native Job Search App"
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-xl font-bold mb-2">React Native Project</h3>
                    <p className="text-sm mb-4">
                      A job search mobile app with Face ID login and advanced filters
                    </p>
                    <div className="flex gap-2 flex-wrap justify-center text-xs">
                      <span className="bg-purple-500/20 px-2 py-1 rounded">React Native</span>
                      <span className="bg-purple-500/20 px-2 py-1 rounded">Node.js</span>
                      <span className="bg-purple-500/20 px-2 py-1 rounded">MongoDB</span>
                    </div>
                  </div>
                </div>
              }
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
              imageSrc="/images/nextjs-project.jpg"
              altText="Next.js E-commerce Project"
              captionText="Next.js E-commerce Platform"
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-xl font-bold mb-2">Next.js E-commerce</h3>
                    <p className="text-sm mb-4">
                      A modern e-commerce platform with Stripe integration
                    </p>
                    <div className="flex gap-2 flex-wrap justify-center text-xs">
                      <span className="bg-purple-500/20 px-2 py-1 rounded">Next.js</span>
                      <span className="bg-purple-500/20 px-2 py-1 rounded">TypeScript</span>
                      <span className="bg-purple-500/20 px-2 py-1 rounded">Stripe</span>
                    </div>
                  </div>
                </div>
              }
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
              imageSrc="/images/nodejs-project.jpg"
              altText="Node.js API Project"
              captionText="Node.js Backend API"
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-xl font-bold mb-2">Node.js API</h3>
                    <p className="text-sm mb-4">
                      A robust backend API with real-time features
                    </p>
                    <div className="flex gap-2 flex-wrap justify-center text-xs">
                      <span className="bg-purple-500/20 px-2 py-1 rounded">Node.js</span>
                      <span className="bg-purple-500/20 px-2 py-1 rounded">Express</span>
                      <span className="bg-purple-500/20 px-2 py-1 rounded">MongoDB</span>
                    </div>
                  </div>
                </div>
              }
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ProjectsSection 