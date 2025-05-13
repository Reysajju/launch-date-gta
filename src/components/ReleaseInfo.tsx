import React from 'react';

export const ReleaseInfo: React.FC = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">
          <span className="block text-white/80 text-sm mb-2 tracking-wider">grand theft auto</span>
          <span className="block bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            COMING MAY 26 2026
          </span>
        </h2>
        
        <div className="flex justify-center gap-8 mt-6">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2">
              <span className="text-black font-bold">PS5</span>
            </div>
            <span className="text-sm text-white/80">PlayStation 5</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2">
              <span className="text-black font-bold">XBOX</span>
            </div>
            <span className="text-sm text-white/80">Xbox Series X|S</span>
          </div>
        </div>
      </div>
    </section>
  );
};