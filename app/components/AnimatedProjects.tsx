"use client";
import { motion } from "framer-motion";
import TiltedCard from "./TiltedCard";

const AnimatedProjects = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="h-[20rem] md:h-[25rem] max-w-2xl mx-auto w-full">
            <TiltedCard
              image="/screenShotTemo.png"
              title="Next.js E-commerce Platform"
              description="A full-stack e-commerce platform with real-time inventory management"
              tags={["Next.js", "TypeScript", "Prisma", "PostgreSQL"]}
              githubUrl="https://github.com/fadi559/temoupro"
              demoUrl="https://temoupro.vercel.app/"
            />
          </div>
          <div className="h-[20rem] md:h-[25rem] max-w-2xl mx-auto w-full">
            <TiltedCard
              image="/AppIcon~ios-marketing.png"
              title="React Native Job Search App"
              description="A job search mobile app with Face ID login and advanced filters"
              tags={["React Native", "Node.js", "MongoDB"]}
              githubUrl="https://github.com/fadi559/Appjob"
              
            />
          </div>
          <div className="h-[20rem] md:h-[25rem] max-w-2xl mx-auto w-full">
           <TiltedCard
              image="/AppIcon~ios-marketing.png"
              title="Node.js Backend API"
              description="A scalable REST API with authentication and real-time features"
              tags={["Node.js", "Express", "MongoDB", "Socket.io"]}
              githubUrl="https://github.com/fadi559/FadiNodejss"
                    
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedProjects; 