'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';

const Animationprac = () => {
  useEffect(() => {
    gsap.fromTo(
      ".circle",
      { x: -40, opacity: 0.9 },
      { x: 40, opacity: 1, duration: 2, repeat: -1, yoyo: true }
    );
  }, []);

  return (
    <div className="p-7">
      <h1 className="text-2xl text-center mt-8 text-black">Food Collection</h1>
      <div className="flex flex-wrap gap-7 mt-20 justify-center">
        <img
          src="/paper1.png"
          alt="Paper 1"
          className="w-60 h-68 object-cover rounded-lg shadow-md ml-18 circle"
        />
        <img
          src="/paper2.png"
          alt="Paper 2"
          className="w-60 h-68 object-cover rounded-lg shadow-md  "
        />
        <img
          src="/paper3.png"
          alt="Paper 3"
          className="w-70 h-68 object-cover rounded-lg shadow-md circle"
        />
        <img
          src="/paper4.png"
          alt="Paper 4"
          className="w-70 h-68 object-cover rounded-lg shadow-md circle"
        />
        <img
          src="/paper5.png"
          alt="Paper 5"
          className="w-70 h-68 object-cover rounded-lg shadow-md circle"
        />
      </div>
    </div>
  );
};

export default Animationprac;
