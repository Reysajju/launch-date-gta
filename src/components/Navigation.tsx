import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Logo } from './Logo';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        <div className="flex items-center">
          <button 
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {menuOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-black/95 backdrop-blur-sm border border-white/20 rounded-md py-2 shadow-xl">
              <ul>
                {['Home', 'Characters', 'Locations', 'Trailers', 'Preorder'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="block px-4 py-2 hover:bg-white/10 transition-colors text-sm uppercase tracking-wider"
                      onClick={(e) => {
                        e.preventDefault();
                        setMenuOpen(false);
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};