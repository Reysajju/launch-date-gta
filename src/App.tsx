import React from 'react';
import { Home } from './components/Home';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;