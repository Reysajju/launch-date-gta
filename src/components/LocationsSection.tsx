import React, { useState } from 'react';
import { Location } from '../types';

interface LocationsSectionProps {
  locations: Location[];
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ locations }) => {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="inline-block text-4xl font-bold px-8 py-4 border-2 border-yellow-500 text-yellow-500 transform -rotate-2">
            VISIT LEONIDA
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Tour a few of the must-see destinations across the sunshine state.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div 
              key={location.id}
              className="relative group cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => setActiveLocation(location)}
            >
              <div className="relative h-80 overflow-hidden rounded-lg border-2 border-white/20 shadow-lg">
                <img 
                  src={location.image} 
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-3xl font-bold" style={{ fontFamily: 'cursive' }}>
                    {location.name}
                  </h3>
                  
                  <button className="mt-4 px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded text-sm uppercase tracking-wider transition-colors">
                    Explore {location.name}
                  </button>
                </div>
                
                {/* Postcard elements */}
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 text-xs uppercase tracking-wider transform rotate-3">
                  Postcard
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-contain bg-no-repeat" style={{ 
                  backgroundImage: "url('https://images.pexels.com/photos/2476154/pexels-photo-2476154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                  clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                  opacity: 0.5
                }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {activeLocation && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setActiveLocation(null)}>
          <div 
            className="relative bg-gray-900 max-w-4xl w-full rounded-lg overflow-hidden shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeLocation.image} 
              alt={activeLocation.name}
              className="w-full h-64 object-cover"
            />
            <button 
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              onClick={() => setActiveLocation(null)}
            >
              ✕
            </button>
            
            <div className="p-6">
              <h3 className="text-3xl font-bold mb-4">{activeLocation.name}</h3>
              <p className="text-white/80 mb-6">{activeLocation.description}</p>
              
              <div className="flex flex-wrap gap-4">
                {activeLocation.points.map((point, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-4 flex-1 min-w-[200px]">
                    <h4 className="font-bold mb-2">{point.title}</h4>
                    <p className="text-sm text-white/70">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};