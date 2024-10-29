import React from 'react';

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Committed to Sustainability
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're revolutionizing fashion by combining AI technology with 
              sustainable practices to create a better future for our planet.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                </div>
                <p className="ml-4 text-gray-600">Zero waste production through on-demand manufacturing</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                </div>
                <p className="ml-4 text-gray-600">Partnerships with eco-friendly fabric suppliers</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                </div>
                <p className="ml-4 text-gray-600">Reduced carbon footprint through local production networks</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&q=80" 
              alt="Sustainable Fashion" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-2xl font-bold text-green-600">85%</p>
              <p className="text-sm text-gray-600">Reduction in fashion waste</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}