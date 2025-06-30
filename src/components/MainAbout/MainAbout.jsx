'use client';
import React, { useState, useEffect, useRef } from 'react';

const MainAbout = () => {
  const testimonials = [
    {
      title: "The best restaurant",
      message: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
      name: "jaya chaubey",
      location: "Los Angeles, CA",
      image: "user.png"
    },
    {
      title: "Simply delicious",
      message: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was beautifully presented.",
      name: "Riya chaubey",
      location: "San Diego, CA",
      image: "user.png"
    },
    {
      title: "One of a kind restaurant",
      message: "The culinary experience at place is first to none. The atmosphere is vibrant, the food – nothing short of extraordinary. Highly recommended.",
      name: "kushal pandey",
      location: "San Francisco, CA",
      image: "user.png"
    },
    {
      title: "Unforgettable Evening",
      message: "I still remember the dessert! Absolutely mouth-watering. I'm already planning my next visit with friends.",
      name: "gunguni",
      location: "Seattle, WA",
      image: "user.png"
    },
    {
      title: "Top-notch service",
      message: "The staff were incredibly attentive and made sure our experience was seamless from start to finish.",
      name: "Joey Tribbiani",
      location: "New York, NY",
      image: "user.png"
    },
    {
      title: "A culinary journey",
      message: "It felt like a journey through taste and culture. Loved every bite of it!",
      name: "Monica Geller",
      location: "Chicago, IL",
      image: "user.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 3) % testimonials.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const handleClick = (name) => {
    alert(`Thanks for reading ${name}'s review!`);
  };

  const displayedTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];

  return (
    <div className="py-12 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-10">What Our Customers Say</h2>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[420px] transition-all duration-500">
          {displayedTestimonials.map((review, index) => (
            <div
              key={index}
              onMouseEnter={stopAutoSlide}
              onMouseLeave={startAutoSlide}
              onClick={() => handleClick(review.name)}
              className="bg-gray-50 rounded-xl shadow-md p-6 cursor-pointer hover:scale-105 transition-transform duration-300 h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-2">“{review.title}”</h3>
                <p className="text-gray-700 mb-4">{review.message}</p>
              </div>
              <div className="flex items-center mt-4 pt-4 border-t">
                <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <p className="font-bold">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainAbout;
