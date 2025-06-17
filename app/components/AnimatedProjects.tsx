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
              title="React Native Job Search App"
              description="A mobile application built with React Native that helps users find and apply for jobs. Features include job search, filtering, and application tracking."
              tags={["React Native", "Firebase", "Redux"]}
              githubUrl="https://github.com/yourusername/job-search-app"
              demoUrl="https://job-search-app-demo.com"
            />
          </div>
          <div className="h-[20rem] md:h-[25rem] max-w-2xl mx-auto w-full">
            <TiltedCard
              image="/AppIcon~ios-marketing.png"
              title="Next.js E-commerce Platform"
              description="A full-stack e-commerce platform built with Next.js, featuring product catalog, shopping cart, and secure checkout."
              tags={["Next.js", "Node.js", "MongoDB"]}
              githubUrl="https://github.com/yourusername/ecommerce-platform"
              demoUrl="https://ecommerce-platform-demo.com"
            />
          </div>
          <div className="h-[20rem] md:h-[25rem] max-w-2xl mx-auto w-full">
            <TiltedCard
              image="/AppIcon~ios-marketing.png"
              title="Node.js Backend API"
              description="A robust RESTful API built with Node.js and Express, featuring authentication, data validation, and error handling."
              tags={["Node.js", "Express", "PostgreSQL"]}
              githubUrl="https://github.com/yourusername/backend-api"
              demoUrl="https://api-docs.example.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedProjects; 