import { useEffect, useState } from 'react';


export default function Welcome({ onClick }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <div 
      onClick={handleClick}
      className="h-screen bg-[#080808] bg-gradient-to-br from-primary to-secondary relative cursor-pointer overflow-hidden overflow-x-hidden max-w-full"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse animate-pulse-delay"></div>
      </div>

      {/* Grid Background Overlay */}
      <div className="fixed inset-0 opacity-20 pointer-events-none z-0 grid-background" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6">
        {/* Welcome Text */}
        <div className={`text-center mb-6 sm:mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-3 sm:mb-6 animate-pulse">
            Code. Create. Repeat.
          </h1>
          <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent animate-shimmer">
            
          </h2>
        </div>

        {/* Subtitle */}
        <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 sm:mb-12 text-center max-w-2xl px-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Welcome to my portfolio
        </p>

        {/* Tap to Continue */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
            <button className="relative px-8 sm:px-12 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white text-base sm:text-lg font-medium hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-2xl touch-manipulation">
              Tap to Continue
              <span className="ml-2 inline-block animate-bounce">→</span>
            </button>
          </div>
        </div>

        {/* Hint Text */}
        <p className={`mt-8 text-white/40 text-sm animate-pulse transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Click anywhere to enter
        </p>
      </div>

      {/* Corner Accent */}
      <div className="opacity-0 absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/20 to-transparent pointer-events-none"></div>
      <div className="opacity-0 absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none"></div>
    </div>
  );
}
