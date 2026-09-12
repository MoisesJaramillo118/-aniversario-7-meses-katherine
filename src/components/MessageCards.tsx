import React from 'react';
import { motion } from 'framer-motion';

export const MessageCards: React.FC = () => {
  const messages = [
    {
      icon: '💖',
      title: 'Mi amorcito',
      text: 'eres mi persona favorita en este mundo, mi confidente, mi cómplice y mi mejor amigo. Contigo descubrí lo que significa amar profundamente y ser amado a cambio.'
    },
    {
      icon: '👧',
      title: 'Mi niña hermosa',
      text: 'cada día descubro lo afortunado que soy de tener a alguien tan especial, tan bella por dentro y por fuera. Tu sonrisa ilumina mis días oscuros.'
    },
    {
      icon: '♾️',
      title: 'Mi eternidad',
      text: 'contigo quiero construir un futuro lleno de amor, aventuras y momentos que atesoraremos para siempre. Eres mi hogar, mi refugio y mi razón de ser.'
    },
    {
      icon: '😄',
      title: 'Nuestra alegría',
      text: 'juntos encontramos la felicidad en las cosas simples: una conversación, una sonrisa, un abrazo. Nuestra risa es la mejor música que existe.'
    },
    {
      icon: '🌟',
      title: 'Nuestro crecimiento',
      text: 'aunque tengamos diferencias, aprendemos a crecer juntas y ser mejores cada día. Nuestra relación nos enseña paciencia, comprensión y amor incondicional.'
    },
    {
      icon: '🎯',
      title: 'Nuestro propósito',
      text: 'ser felices amándonos el uno al otro es nuestro propósito y nuestra alegría. Juntos somos más fuertes, más valientes y más completos.'
    }
  ];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent playfair-display">
        Nuestro Viaje Juntos
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 border border-white/20"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold mr-3">
                {message.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-800 playfair-display">
                {message.title}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed poppins">
              {message.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};