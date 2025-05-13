import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <div className="mb-6">
            <span
              className="inline-block text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
            >
              VI
            </span>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">COMING MAY 26 2026</h2>
            <p className="text-lg text-white/80">Available on:</p>

            <div className="flex justify-center gap-8 mt-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2">
                  <span className="text-black font-bold text-xs">PS5</span>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2">
                  <span className="text-black font-bold text-xs">XBOX</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-md mx-auto mb-12">
            <h3 className="text-xl font-bold mb-2">GET ROCKSTAR PROPAGANDA</h3>
            <p className="text-sm text-white/70 mb-4">
              Get the latest game announcements, updates on special events and offers, and much more from Rockstar Games.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-gray-800 border border-gray-700 px-4 py-2 rounded-l outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded-r transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
            {['Corporate', 'Privacy', 'Cookie Settings', 'Cookie Policy', 'Legal', 'Do Not Sell or Share My Personal Information'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4">
            <div className="bg-black border border-white/20 p-2 rounded">
              <p className="text-xs text-white/60">
                RP
              </p>
            </div>
            <p className="text-xs text-white/60 max-w-xs text-center">
              May contain content inappropriate for children. Visit esrb.org for rating information.
            </p>
          </div>

          <p className="text-center text-xs text-white/40 mt-8">
            &copy; 2026 Rockstar Games, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};