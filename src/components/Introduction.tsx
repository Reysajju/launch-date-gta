import React from 'react';

export const Introduction: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Vice City, USA.</h2>
        
        <p className="text-xl text-white/80 leading-relaxed">
          Jason and Lucia have always known the deck is stacked against them. But when an easy score goes wrong, 
          they find themselves on the darkest side of the sunniest place in America, in the middle of a criminal 
          conspiracy stretching across the state of Leonida — forced to rely on each other more than ever if they 
          want to make it out alive.
        </p>
      </div>
    </section>
  );
};