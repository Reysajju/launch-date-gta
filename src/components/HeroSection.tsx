import React, { useState } from 'react';
import { Play, ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [showTrailer, setShowTrailer] = useState(false);

  const handleWatchTrailer = () => {
    setShowTrailer(true);
  };

  const handleCloseTrailer = () => {
    setShowTrailer(false);
  };

  return (
    <section className="relative h-screen bg-cover bg-center flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/GTAVI_Artwork_Wallpapers/Jason_and_Lucia_01_With_Logos/Jason_and_Lucia_01_With_Logos_landscape.jpg')",
          filter: "brightness(0.7)"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
      </div>

      <div className="relative z-20 text-center px-4">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter mb-8">
            <span className="block text-white">Grand Theft Auto</span>
            <span
              className="block text-9xl md:text-[10rem] font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 leading-none"
            >
              VI
            </span>
          </h1>

          <button
            onClick={handleWatchTrailer}
            className="group flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Play className="w-5 h-5 fill-white" />
            <span className="uppercase text-sm tracking-wider">Watch Trailer 2</span>
          </button>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/70" />
          </div>

          {showTrailer && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <div className="relative w-full max-w-4xl">
                <button
                  onClick={handleCloseTrailer}
                  className="absolute -top-12 right-0 text-white/80 hover:text-white"
                >
                  Close ✕
                </button>
                <div className="relative pb-[56.25%] h-0">
                  <video
                    className="absolute top-0 left-0 w-full h-full"
                    controls
                    autoPlay
                  >
                    <source src="/GTAVI_Videos/Trailer_2/GTAVI_Trailer_2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};