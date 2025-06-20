// 'use client';

// import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
// import { useRef } from 'react';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// import Image from 'next/image';

// const projects = [
//   {
//     title: 'Next.js E-commerce Platform',
//     link: 'https://temoupro.vercel.app/',
//     github: 'https://github.com/fadi559/temoupro',
//     thumbnail: '/screenShotTemo.png',
//     tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
//   },
//   {
//     title: 'React Native Job Search App',
//     link: '',
//     github: 'https://github.com/fadi559/Appjob',
//     thumbnail: '/AppIcon~ios-marketing.png',
//     tags: ['React Native', 'Node.js', 'MongoDB'],
//   },
//   {
//     title: 'Node.js Backend API',
//     link: '',
//     github: 'https://github.com/fadi559/FadiNodejss',
//     thumbnail: '/AppIcon~ios-marketing.png',
//     tags: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
//   },
// ];

// const AnimatedProjects = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start start', 'end start'],
//   });

//   const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

//   const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
//   const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
//   const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
//   const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
//   const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
//   const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

//   const firstRow = projects.slice(0, 2);
//   const secondRow = projects.slice(2, 3);

//   return (
//     <section
//       ref={ref}
//       className="h-[250vh] py-40 overflow-hidden relative flex flex-col [perspective:1000px] [transform-style:preserve-3d]"
//     >
//       <div className="max-w-7xl relative mx-auto pb-40 px-4 w-full">
//         <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">
//           Featured Projects
//         </h2>
//       </div>

//       <motion.div
//         style={{ rotateX, rotateZ, translateY, opacity }}
//         className="space-y-20"
//       >
//         <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 justify-center">
//           {firstRow.map((project) => (
//             <ProjectCard project={project} translate={translateX} key={project.title} />
//           ))}
//         </motion.div>

//         <motion.div className="flex flex-row space-x-10 justify-center">
//           {secondRow.map((project) => (
//             <ProjectCard project={project} translate={translateXReverse} key={project.title} />
//           ))}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// const ProjectCard = ({
//   project,
//   translate,
// }: {
//   project: {
//     title: string;
//     link: string;
//     github: string;
//     thumbnail: string;
//     tags: string[];
//   };
//   translate: MotionValue<number>;
// }) => {
//   return (
//     <motion.div
//       style={{ x: translate }}
//       whileHover={{ y: -20 }}
//       className="group relative w-[22rem] md:w-[28rem] h-[20rem] rounded-xl overflow-hidden shadow-lg bg-black/30 backdrop-blur-lg border border-white/20"
//     >
//       <Image
//         src={project.thumbnail}
//         alt={project.title}
//         fill
//         className="object-cover object-center absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105"
//       />
//       <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
//       <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
//         <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
//         <div className="flex flex-wrap gap-2 text-xs text-white mb-3">
//           {project.tags.map((tag, idx) => (
//             <span key={idx} className="bg-white/20 px-2 py-1 rounded">
//               {tag}
//             </span>
//           ))}
//         </div>
//         <div className="flex gap-4">
//           <a
//             href={project.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
//           >
//             <FaGithub />
//           </a>
//           {project.link && (
//             <a
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
//             >
//               <FaExternalLinkAlt />
//             </a>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default AnimatedProjects;

 






 
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