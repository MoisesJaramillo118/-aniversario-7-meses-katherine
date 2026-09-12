import Slideshow from './components/Slideshow';
import MessageCards from './components/MessageCards';
import DecorativeElements from './components/DecorativeElements';
import { TitleAnimation } from './components/TitleAnimation';

function App() {
  return (
    <div className="App">
      <div className="relative min-h-screen bg-gradient-to-tr from-pink-50 to-white/50">
        <div className="absolute inset-0 pointer-events-none">
          <DecorativeElements />
        </div>

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
              <div className="header-actions">
                <div className="audio-player">
                  <AudioController />
                </div>
              </div>
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
      </div>
    </div>
  );
}

export default App;