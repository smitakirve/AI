import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Fashion, Tailored to You
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Experience the future of fashion with personalized designs created just for you. 
            Sustainable, unique, and perfectly fitted to your style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-purple-700 transition-colors">
              Start Designing
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="flex items-center justify-center bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white/20 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}