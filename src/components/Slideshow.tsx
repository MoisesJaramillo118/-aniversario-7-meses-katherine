import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Updated with all 18 images and their correct filenames
const images = [
  {
    src: '/images/WhatsApp Image 2026-09-11 at 22.56.14 (1).jpeg',
    alt: 'Momento especial 1',
    title: 'Mi amorcito',
    text: 'eres mi persona favorita en este mundo, mi confidente, mi cómplice y mi mejor amigo.'
  },
  {
    src: '/images/WhatsApp Image 2026-09-11 at 22.56.14 (2).jpeg',
    alt: 'Momento especial 2',
    title: 'Gracias por ser especial',
    text: 'gracias por ser especial en mi vida, por tu luz y tu energía que iluminas cada día.'
  },
  {
    src: '/images/WhatsApp Image 2026-09-11 at 22.56.14.jpeg',
    alt: 'Momento especial 3',
    title: 'Te amo demasiado',
    text: 'te amo demasiado y te quiero por toda la eternidad, cada día más que el anterior.'
  },
  {
    src: '/images/WhatsApp Image 2026-09-11 at 22.56.15 (1).jpeg',
    alt: 'Momento especial 4',
    title: 'Hace 7 meses',
    text: 'Hace 7 meses conocí al amor de mi vida, y cada día contigo es un regalo que atesoro.'
  },
  {
    src: '/images/WhatsApp Image 2026-09-11 at 22.56.15 (2).jpeg',
    alt: 'Momento especial 5',
    title: 'Eres hermosa',
    text: 'eres la mujer más hermosa del universo, tanto por dentro como por fuera, y eso me hace el hombre más afortunado.'
  },
  {
    src: '/images/WhatsApp Image 2026-09-11 at 22.56.15 (3).jpeg',
    alt: 'Momento especial 6',
    title: 'Siempre estaré',
    text: 'siempre estaré para ti, en los buenos momentos y en los desafíos.'
  },
  {
    src: '/images/WhatsApp Image 2026-09-11 at 22.56.15.jpeg',
    alt: 'Momento especial 7',
    title: 'De la mano',
    text: 'De la mano juntos por toda la eternidad, enfrentando todo lo que venga.'
  },
  {
    src: '/images/WhatsApp Image 2026-09-11 at 22.56.16 (1).jpeg',
    alt: 'Momento especial 8',
    title: 'Cada día',
    text: 'cada día nos conocemos más y nuestro amor crece y se fortalece.'
  },
  {
    src: '/images/WhatsApp Image 2026-09-11 at 22.56.16 (2).jpeg',
    alt: 'Momento especial 9',
    title: 'Aunque tengamos diferencias',
    text: 'aunque tengamos diferencias, aprendemos a crecer juntas y ser mejores cada día.'
  },
  {
    src: '/images/WhatsApp Image 2026-09-11 at 22.56.16 (3).jpeg',
    alt: 'Momento especial 10',
    title: 'Ser felices',
    text: 'ser felices amándonos el uno al otro es nuestro propósito y nuestra alegría.'
  },
  {
    src: '/images/WhatsApp Image 2026-09-11 at 22.56.16 (4).jpeg',
    alt: 'Momento especial 11',
    title: 'Nuestro amor',
    text: 'nuestro amor es único, especial y lleno de momentos mágicos que atesoramos.'
  },
  {
    src: '/images/WhatsApp Image 2026-09-11 at 22.56.16 (5).jpeg',
    alt: 'Momento especial 12',
    title: 'Mi niña hermosa',
    text: 'eres mi niña hermosa, mi luz en los días oscuros y mi razón para sonreír.'
  },
  {
    src: '/images/WhatsApp Image 2026-09-11 at 22.56.16.jpeg',
    alt: 'Momento especial 13',
    title: 'Eres mi vida',
    text: 'eres el amor de mi vida y mi razón de ser, mi inspiración constante.'
  },
  {
    src: '/images/WhatsApp Image 2026-09-11 at 22.56.17 (1).jpeg',
    alt: 'Momento especial 14',
    title: 'Contigo siempre',
    text: 'contigo quiero estar por siempre y jamás, construyendo nuestro futuro juntos.'
  },
  {
    src: '/images/WhatsApp Image 2026-09-11 at 22.56.17 (2).jpeg',
    alt: 'Momento especial 15',
    title: 'Mi eternidad',
    text: 'eres mi eternidad, mi siempre, mi para siempre, mi hogar y mi refugio.'
  },
  {
    src: '/images/WhatsApp Image 2026-09-11 at 22.56.17 (3).jpeg',
    alt: 'Momento especial 16',
    title: 'Te adoro',
    text: 'te adoro más de lo que las palabras pueden expresar, más allá de lo que cualquier lenguaje puede decir.'
  },
  {
    src: '/images/WhatsApp Image 2026-09-11 at 22.56.17 (4).jpeg',
    alt: 'Momento especial 17',
    title: '7 meses de nosotros',
    text: '7 meses de amor, risas, aprendizajes y crecimiento juntos como pareja.'
  },
  {
    src: '/images/WhatsApp Image 2026-09-11 at 22.56.17.jpeg',
    alt: 'Momento especial 18',
    title: 'Mi princessa',
    text: 'eres mi princesa, mi reina, mi todo, y mereces todo el amor y felicidad del mundo.'
  }
];

const Slideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideshowRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHovered]);

  // Pause on hover
  useEffect(() => {
    if (!slideshowRef.current) return;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    slideshowRef.current.addEventListener('mouseenter', handleMouseEnter);
    slideshowRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      slideshowRef.current?.removeEventListener('mouseenter', handleMouseEnter);
      slideshowRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentIndex(prev => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Touch support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX = e.changedTouches[0].clientX;
    handleGesture();
  };

  const handleGesture = () => {
    if (touchStartX < touchEndX - 50) {
      setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
    }
    if (touchStartX > touchEndX + 50) {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }
  };

  return (
    <motion.div
      ref={slideshowRef}
      className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Current slide with Ken Burns effect */}
      <motion.div
        key={currentIndex}
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.03 }}
        transition={{ duration: 12, ease: 'easeInOut' }}
        style={{
          overflow: 'hidden',
          width: '100%',
          height: '100%'
        }}
      >
        <motion.img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="object-cover w-full h-full"
          style={{
            width: '100%',
            height: '100%',
            objectPosition: 'center'
          }}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Text content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-8 left-8 right-8 text-white z-10"
        >
          <h2 className="text-3xl font-bold mb-4 playfair-display drop-shadow-md">
            {images[currentIndex].title}
          </h2>
          <p className="text-lg leading-relaxed poppins">
            {images[currentIndex].text}
          </p>
        </motion.div>
      </motion.div>

      {/* Navigation dots */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20"
      >
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-white/80 w-5 h-5'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </motion.div>

      {/* Navigation arrows (optional) */}
      <div className="absolute inset-y-0 left-4 right-4 flex justify-between items-center pointer-events-none">
        <motion.button
          onClick={() => setCurrentIndex(prev => (prev - 1 + images.length) % images.length)}
          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200 hidden md:flex"
          aria-label="Slide anterior"
        >
          <motion.svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </motion.button>

        <motion.button
          onClick={() => setCurrentIndex(prev => (prev + 1) % images.length)}
          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200 hidden md:flex"
          aria-label="Slide siguiente"
        >
          <motion.svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Slideshow;