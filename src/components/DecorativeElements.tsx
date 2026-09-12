import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export const DecorativeElements: React.FC = () => {
  useEffect(() => {
    // Create decorative elements dynamically for better performance
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '0';
    document.body.appendChild(container);

    // Create various decorative elements
    const createElement = (type: 'circle' | 'blob' | 'line') => {
      const el = document.createElement('div');
      el.style.position = 'absolute';

      // Random size
      const size = Math.random() * 100 + 50; // 50-150px
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;

      // Random position
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `${Math.random() * 100}%`;

      // Random animation duration and delay
      const duration = Math.random() * 20 + 10; // 10-30s
      const delay = Math.random() * 10; // 0-10s delay

      switch (type) {
        case 'circle':
          el.style.borderRadius = '50%';
          el.style.backgroundColor = 'rgba(255, 182, 193, 0.1)'; // Light pink
          el.style.boxShadow = '0 0 30px rgba(255, 182, 193, 0.2)';
          el.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
          break;

        case 'blob':
          el.style.borderRadius = '50%';
          el.style.backgroundColor = 'rgba(186, 255, 201, 0.1)'; // Mint green
          el.style.boxShadow = '0 0 30px rgba(186, 255, 201, 0.2)';
          el.style.animation = `float ${duration}s ease-in-out ${delay}s infinite, blob ${duration * 0.5}s ease-in-out ${delay}s infinite`;
          break;

        case 'line':
          el.style.width = '2px';
          el.style.height = `${Math.random() * 200 + 100}px`; // 100-300px
          el.style.backgroundColor = 'rgba(255, 159, 243, 0.1)'; // Light purple
          el.style.boxShadow = '0 0 20px rgba(255, 159, 243, 0.2)';
          el.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
          break;
      }

      return el;
    };

    // Add various types of elements
    const elements = [];
    for (let i = 0; i < 8; i++) {
      const type = ['circle', 'blob', 'line'][Math.floor(Math.random() * 3)];
      elements.push(createElement(type));
    }

    elements.forEach(el => container.appendChild(el));

    // Add styles for animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% {
          transform: translateY(0) translateX(0) rotate(0deg);
        }
        33% {
          transform: translateY(-20px) translateX(-10px) rotate(5deg);
        }
        66% {
          transform: translateY(20px) translateX(10px) rotate(-5deg);
        }
      }

      @keyframes blob {
        0%, 100% {
          border-radius: 50%;
        }
        30% {
          border-radius: 60% 40% 50% 50% / 60% 30% 70% 40%;
        }
        40% {
          border-radius: 50% 60% 30% 60% / 50% 60% 30% 60%;
        }
        50% {
          border-radius: 50%;
        }
        60% {
          border-radius: 40% 50% 60% 50% / 60% 40% 70% 60%;
        }
        70% {
          border-radius: 50% 30% 60% 50% / 50% 60% 30% 60%;
        }
        80% {
          border-radius: 40% 50% 50% 60% / 60% 60% 40% 40%;
        }
        90% {
          border-radius: 50% 50% 40% 60% / 60% 40% 60% 50%;
        }
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      document.body.removeChild(container);
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default DecorativeElements;