import React from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Sparkles className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              FashionAI
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#features" className="hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#how-it-works" className="hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">How It Works</a>
              <a href="#sustainability" className="hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Sustainability</a>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#features" className="hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#how-it-works" className="hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">How It Works</a>
            <a href="#sustainability" className="hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium">Sustainability</a>
            <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}