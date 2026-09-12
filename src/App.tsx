import Slideshow from './components/Slideshow';
import MessageCards from './components/MessageCards';
import DecorativeElements from './components/DecorativeElements';
import { TitleAnimation } from './components/TitleAnimation';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [audioPlayed, setAudioPlayed] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = async () => {
      try {
        await audio.play();
        setAudioPlayed(true);
      } catch (err) {
        console.log('Autoplay prevented:', err);
        // Keep audioPlayed false to show overlay
      }
    };

    playAudio();

    // Also listen for user interaction to enable audio
    const enableAudio = () => {
      if (!audioPlayed && audioRef.current) {
        audioRef.current.play().then(() => setAudioPlayed(true));
      }
    };

    ['click', 'touchstart', 'keydown'].forEach((event) => {
      window.addEventListener(event, enableAudio);
    });

    return () => {
      ['click', 'touchstart', 'keydown'].forEach((event) => {
        window.removeEventListener(event, enableAudio);
      });
    };
  }, [audioPlayed]);

  return (
    <div className="App">
      <div className="relative min-h-screen bg-gradient-to-tr from-pink-50 to-white/50">
        <div className="absolute inset-0 pointer-events-none">
          <DecorativeElements />
        </div>

        {/* Audio Autoplay */}
        <audio ref={audioRef} id="background-audio" loop src="/audio/nuestra-cancion.mp3" style={{ display: 'none' }}></audio>

        {/* Header Section */}
        <header className="header">
          <div className="container">
            <div className="header-content">
              <h1 className="header-title animate-fade-in-down">
                7 Meses de Nuestro Amor
              </h1>
              <p className="header-subtitle animate-fade-in">
                Celebrando cada momento, cada sonrisa y cada latido juntos
              </p>
                          </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container">
          {/* Slideshow Section */}
          <section className="section">
            <div className="section-title">
              <h2>Nuestros Momentos Especiales</h2>
            </div>
            <div className="slideshow-container">
              <Slideshow />
            </div>
          </section>

          {/* Message Cards Section */}
          <section className="section">
            <div className="section-title">
              <h2>Nuestro Viaje Juntos</h2>
            </div>
            <MessageCards />
          </section>
        </main>

        {/* Audio permission overlay */}
        {!audioPlayed && (
          <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm z-50">
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-8 text-center text-white max-w-md">
              <svg className="mx-auto mb-6 w-12 h-12 text-pink-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h2 className="text-xl font-bold mb-4">Activar sonido</h2>
              <p className="mb-6">Para escuchar nuestra canción, por favor toca cualquier parte de la pantalla</p>
              <button
                onClick={() => {
                  if (audioRef.current) {
                    audioRef.current.play().then(() => setAudioPlayed(true));
                  }
                }}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
              >
                Activar sonido
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;