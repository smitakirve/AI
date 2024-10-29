import React from 'react';

const steps = [
  {
    number: "01",
    title: "Share Your Style",
    description: "Tell us about your style preferences and body measurements through our intuitive interface."
  },
  {
    number: "02",
    title: "AI Design Process",
    description: "Our AI creates personalized clothing designs based on your unique profile and current trends."
  },
  {
    number: "03",
    title: "Virtual Fitting",
    description: "Preview and adjust your custom designs in our state-of-the-art virtual fitting room."
  },
  {
    number: "04",
    title: "Sustainable Production",
    description: "Your approved designs are crafted on-demand using eco-friendly materials and processes."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How FashionAI Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A seamless journey from your style preferences to your perfect wardrobe
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-5xl font-bold text-purple-100 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-purple-100 -z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}