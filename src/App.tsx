import { useState, useEffect } from 'react';

function App() {
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-mono relative">
      {/* Scanline overlay */}
      <div className="scanline-overlay fixed inset-0 z-50" />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 z-40 w-full px-6 md:px-12 py-5 flex items-center justify-between border-b border-white/10 bg-black/80 backdrop-blur-sm transition-opacity duration-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-white animate-flicker" />
          <span className="text-xs tracking-ultrawide font-bold uppercase">
            Iron Romeo
          </span>
        </div>
        <span className="text-[10px] tracking-brutal text-white/40 uppercase hidden md:block">
          Sistemos Dekonstrukcija
        </span>
      </header>

      {/* Main content */}
      <main className="min-h-screen flex flex-col md:flex-row">
        {/* Left side - Manifesto */}
        <div className="w-full md:w-1/2 flex flex-col justify-between px-6 md:px-12 pt-24 pb-8 md:pt-0 md:pb-0 md:min-h-screen">
          {/* Manifesto content */}
          <div className="flex flex-col justify-center md:min-h-[60vh] pt-8 md:pt-0">
            {/* Tag line */}
            <div
              className={`mb-8 transition-all duration-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-white/40" />
                <span className="text-[10px] tracking-ultrawide text-white/50 uppercase">
                  Manifestas / 001
                </span>
              </div>
            </div>

            {/* Main heading */}
            <h1
              className={`text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8 max-w-lg transition-all duration-700 delay-200 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              KLAUSIMAS TAU
              <br />
              <span className="text-white/60">—</span>
              <br />
              LAIKAI SAVE
              <br />
              LAISVU?
            </h1>

            {/* Manifesto paragraph */}
            <p
              className={`text-sm md:text-base leading-relaxed text-white/60 max-w-md mb-10 transition-all duration-700 delay-300 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Tavo mintys nėra tavo. Algoritmai nustato ką matai, ką
              galvoji, ką jauti. Kognityvinis suverenitetas — tai ne
              privilegija, o kova. Išeiti iš sistemos reiškia pradėti
              matyti. Mes atveriame erdvę tiems, kurie atsibudo.
            </p>

            {/* CTA */}
            <div
              className={`transition-all duration-700 delay-500 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href="https://ironromeo.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="cta-button inline-flex items-center gap-3 group relative"
              >
                <span
                  className={`absolute left-0 top-0 h-full bg-white transition-all duration-300 ${
                    hovered ? 'w-full' : 'w-0'
                  }`}
                  style={{ zIndex: 0 }}
                />
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    hovered ? 'text-black' : 'text-white'
                  }`}
                >
                  PRENUMERUOTI
                </span>
                <svg
                  className={`w-4 h-4 relative z-10 transition-all duration-300 ${
                    hovered ? 'translate-x-1 text-black' : 'text-white'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>

              <p className="text-[10px] text-white/30 mt-4 tracking-wider">
                Naujienlaiškis apie laisvę. Ir prieš sistemą.
              </p>
            </div>
          </div>

          {/* Footer - left side */}
          <div
            className={`mt-12 md:mt-0 transition-all duration-700 delay-700 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="h-px w-full bg-white/10 mb-4" />
            <div className="flex items-center justify-between">
              <span className="text-[10px] tracking-brutal text-white/30 uppercase">
                &copy; 2026 IRON ROMEO. SISTEMOS DEKONSTRUKCIJA.
              </span>
              <span className="text-[10px] tracking-widest text-white/20 uppercase hidden md:block">
                LT/EN
              </span>
            </div>
          </div>
        </div>

        {/* Right side - Visual */}
        <div
          className={`w-full md:w-1/2 md:min-h-screen relative overflow-hidden transition-all duration-1000 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Main image */}
          <div className="relative w-full h-[50vh] md:h-full">
            <img
              src="https://images.pexels.com/photos/36194126/pexels-photo-36194126.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Breaking free from chains"
              className="w-full h-full object-cover"
              style={{
                filter: 'grayscale(100%) contrast(1.4) brightness(0.5)',
              }}
            />

            {/* Dark gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent md:bg-gradient-to-l md:from-transparent md:via-black/20 md:to-black" />
            <div className="absolute inset-0 bg-black/30" />

            {/* Chiaroscuro light effect */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.03) 0%, transparent 60%)',
              }}
            />

            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />

            {/* Corner mark */}
            <div className="absolute top-6 right-6 md:top-12 md:right-12">
              <div className="flex flex-col items-end gap-1">
                <div className="h-px w-8 bg-white/30" />
                <div className="w-px h-8 bg-white/30" />
              </div>
            </div>

            {/* Bottom-right label */}
            <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12">
              <span className="text-[10px] tracking-ultrawide text-white/20 uppercase">
                IR/001
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile footer for when image pushes content */}
      <div className="md:hidden px-6 pb-6">
        <div className="h-px w-full bg-white/10 mb-4" />
        <span className="text-[10px] tracking-brutal text-white/30 uppercase">
          &copy; 2026 IRON ROMEO. SISTEMOS DEKONSTRUKCIJA.
        </span>
      </div>
    </div>
  );
}

export default App;
