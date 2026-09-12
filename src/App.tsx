import Slideshow from './components/Slideshow';
import MessageCards from './components/MessageCards';
import DecorativeElements from './components/DecorativeElements';
import { TitleAnimation } from './components/TitleAnimation';
import { AudioController } from './components/AudioController';

function App() {
  return (
    <div className="App">
      <div className="relative min-h-screen bg-gradient-to-tr from-pink-100 to-white">
        <div className="absolute inset-0 pointer-events-none">
          <DecorativeElements />
        </div>
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <TitleAnimation />
          <div className="fixed top-4 right-4 z-20">
            <AudioController />
          </div>
          <section className="relative w-full max-w-4xl mt-16">
            <Slideshow />
          </section>
          <section className="relative w-full max-w-4xl mt-12 space-y-8">
            <MessageCards />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;