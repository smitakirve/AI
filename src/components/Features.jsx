import React from 'react';
import { Sparkles, Ruler, Recycle, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "AI-Powered Design",
    description: "Our advanced AI analyzes your preferences and measurements to create unique designs that match your style perfectly."
  },
  {
    icon: <Ruler className="h-6 w-6" />,
    title: "Perfect Fit Guarantee",
    description: "Virtual fitting room technology ensures your garments fit perfectly before production begins."
  },
  {
    icon: <Recycle className="h-6 w-6" />,
    title: "Sustainable Fashion",
    description: "On-demand production and eco-friendly materials minimize waste and environmental impact."
  },
  {
    icon: <RefreshCw className="h-6 w-6" />,
    title: "Continuous Learning",
    description: "Our AI learns from your feedback to improve future designs and recommendations."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Revolutionizing Personal Fashion
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Combining cutting-edge AI technology with sustainable practices to create 
            your perfect wardrobe.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}