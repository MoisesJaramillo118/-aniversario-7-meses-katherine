import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const AudioController: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [userHasInteracted, setUserHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volumeLevel, setVolumeLevel] = useState(0);

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    audio.volume = 0.3; // Set volume to 30%

    // Try to play audio when component mounts or when user interacts
    const tryPlayAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Auto-play was prevented:', error);
        // Wait for user interaction
        setIsPlaying(false); // Visual state shows paused until user interacts
      }
    };

    // Try to play on mount
    tryPlayAudio();

    // Update volume level visualization
    const updateVolume = () => {
      if (!audioRef.current) return;
      // Only animate if we're supposed to be playing or if user has interacted
      const shouldAnimate = isPlaying || userHasInteracted;
      if (shouldAnimate) {
        const barHeight = Math.abs(Math.sin(Date.now() / 200) * 50);
        setVolumeLevel(barHeight);
      } else {
        setVolumeLevel(0);
      }
    };

    const interval = setInterval(updateVolume, 100);
    return () => clearInterval(interval);
  }, [isPlaying, userHasInteracted]);

  const toggleAudio = () => {
    setUserHasInteracted(true); // Mark that user has interacted
    setIsPlaying(!isPlaying);
  };

  // Handle user interaction anywhere on the page to enable autoplay
  useEffect(() => {
    const handleUserInteraction = () => {
      setUserHasInteracted(true);
      // Try to play if we're supposed to be playing
      if (isPlaying && audioRef.current) {
        audioRef.current.play().catch(e => console.log('Play failed:', e));
      }
    };

    // Listen for common user interaction events
    ['click', 'touchstart', 'keydown'].forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true });
    });

    return () => {
      ['click', 'touchstart', 'keydown'].forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, [isPlaying]);

  return (
    <motion.div
      onClick={toggleAudio}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      {/* Audio element */}
      <audio
        ref={audioRef}
        id="background-audio"
        loop
        preload="auto"
        src="/audio/nuestra-cancion.mp3"
      >
        Tu navegador no soporta el elemento de audio.
      </audio>

      {/* Spotify-like visualization */}
      <motion.div className="flex space-x-1 mt-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className={`w-1 bg-white/20 rounded transition-all duration-100 ${
              (isPlaying || userHasInteracted) && volumeLevel > 0
                ? `h-${volumeLevel + (i * 5)} bg-gradient-to-t from-pink-400 to-purple-500`
                : `h-2 bg-white/20`
            }`}
          />
        ))}
      </motion.div>

      {/* Play/Pause icon */}
      <motion.div className="mt-2">
        {isPlaying ? (
          <motion.svg
            whileHover={{ rotate: 90 }}
            className="w-5 h-5 text-pink-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 19V5L14 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        ) : (
          <motion.svg
            whileHover={{ scale: 1.2 }}
            className="w-5 h-5 text-pink-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </motion.svg>
        )}
      </motion.div>

      {/* Text label */}
      <motion.div className="mt-1 text-xs text-white/90 font-medium">
        nuestra canción
      </motion.div>
    </motion.div>
  );
};

export default AudioController;
