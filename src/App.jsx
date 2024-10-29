import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import AIShowcase from './components/AIShowcase.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Sustainability from './components/Sustainability.jsx';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <AIShowcase />
      <HowItWorks />
      <Sustainability />
    </div>
  );
}

export default App;