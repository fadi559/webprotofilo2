"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import TiltedCard from './TiltedCard';

const cn = (...inputs: any[]) => {
  return inputs.filter(Boolean).join(" ");
};

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
};

interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

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