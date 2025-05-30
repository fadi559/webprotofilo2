'use client';

import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="fixed inset-0 -z-10 bg-black"
    />
  );
};

export default AnimatedBackground; 