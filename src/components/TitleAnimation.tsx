import { motion } from 'framer-motion';
import React from 'react';

export const TitleAnimation: React.FC = () => {
  return (
    <motion.h1
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent playfair-display"
    >
      7 Meses de Nuestro Amor
    </motion.h1>
  );
};