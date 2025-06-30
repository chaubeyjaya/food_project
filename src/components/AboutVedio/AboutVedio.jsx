'use client'
import React from 'react';
import { UtensilsCrossed, ShoppingCart, Truck } from 'lucide-react'; // Using Lucide icons

const AboutVedio = () => {
  return (
    <div className="w-full">
      {/* Banner Video Section */}
      <div className="w-full overflow-hidden">
      <div className="relative w-full h-[300px] md:h-[400px] bg-black overflow-hidden mx-3 mt-1">
        <video
          className="w-full h-full object-cover opacity-60 pointer-events-none" // prevents pause on click
          autoPlay
          loop
          muted
        >
          <source src="/cooking.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-2xl md:text-3xl font-semibold leading-snug">
            Feel the authentic & <br /> original taste from us
          </h1>
        </div>
      </div>
      </div>

      {/* Feature Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-6 bg-white text-center">
        <div>
          <UtensilsCrossed className="mx-auto mb-4 h-10 w-10 text-red-600" />
          <h3 className="text-lg font-semibold">Multi Cuisine</h3>
          <p className="text-gray-600 mt-2">In the new era of technology we look in the future with certainty life.</p>
        </div>
        <div>
          <ShoppingCart className="mx-auto mb-4 h-10 w-10 text-red-600" />
          <h3 className="text-lg font-semibold">Easy To Order</h3>
          <p className="text-gray-600 mt-2">In the new era of technology we look in the future with certainty life.</p>
        </div>
        <div>
          <Truck className="mx-auto mb-4 h-10 w-10 text-red-600" />
          <h3 className="text-lg font-semibold">Fast Delivery</h3>
          <p className="text-gray-600 mt-2">In the new era of technology we look in the future with certainty life.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutVedio;
