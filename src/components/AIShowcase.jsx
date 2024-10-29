import React, { useState } from 'react';
import { Wand2, Sparkles, RefreshCcw } from 'lucide-react';

const styleExamples = [
  {
    name: "Minimalist Chic",
    description: "Clean lines and neutral tones",
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80"
  },
  {
    name: "Bohemian Spirit",
    description: "Free-spirited and artistic",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80"
  },
  {
    name: "Urban Edge",
    description: "Modern street style fusion",
    image: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&q=80"
  }
];

export default function AIShowcase() {
  const [activeStyle, setActiveStyle] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 1500);
  };

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Wand2 className="h-8 w-8 text-purple-400 mr-2" />
            <h2 className="text-3xl font-bold">AI Design Magic</h2>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Watch our AI transform your style preferences into unique fashion designs in real-time
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Sparkles className="h-5 w-5 text-purple-400 mr-2" />
                Style Preferences
              </h3>
              <div className="space-y-4">
                {styleExamples.map((style, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStyle(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      activeStyle === index
                        ? "bg-purple-600"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                  >
                    <h4 className="font-medium">{style.name}</h4>
                    <p className="text-sm text-gray-300">{style.description}</p>
                  </button>
                ))}
              </div>
            </div>
            
            <button
              onClick={handleGenerate}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg font-medium flex items-center justify-center transition-colors"
            >
              {isGenerating ? (
                <>
                  <RefreshCcw className="h-5 w-5 mr-2 animate-spin" />
                  Generating Design...
                </>
              ) : (
                <>
                  <Wand2 className="h-5 w-5 mr-2" />
                  Generate Design
                </>
              )}
            </button>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src={styleExamples[activeStyle].image}
                alt={styleExamples[activeStyle].name}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              {isGenerating && (
                <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <RefreshCcw className="h-12 w-12 animate-spin mx-auto mb-4" />
                    <p className="text-lg font-medium">AI Processing...</p>
                  </div>
                </div>
              )}
            </div>
            <div className="absolute -bottom-6 -right-6 bg-purple-600 p-4 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">AI</p>
              <p className="text-sm opacity-75">Powered Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}