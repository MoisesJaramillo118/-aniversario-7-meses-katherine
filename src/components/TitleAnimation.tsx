import { motion } from 'framer-motion';
import React from 'react';

export const TitleAnimation: React.FC = () => {
  return (
    <motion.h1
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
      className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent playfair-display"
    >
      7 Meses de Nuestro Amor
    </motion.h1>
  );
};

export default TitleAnimation;