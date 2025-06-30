"use client"

import React, { useEffect } from 'react';
import gsap from 'gsap';

const images = [
  { src: '/ani1.png', text: 'Cherry' },
  { src: '/ani2.png', text: 'Cake' },
  { src: '/ani3.png', text: 'Banana' },
  { src: '/ani4.png', text: 'Grapes' },
  { src: '/ani1.png', text: 'Strawberry' },
  { src: '/image2.png', text: 'fries' }
];

const Imagecard = () => {
  useEffect(() => {
    const animateIn = () => {
      gsap.to(".image-box", {
        duration: 1,
        rotation: 360,
        opacity: 1,
        y: 0,
        delay: 0.5,
        stagger: 0.2,
        ease: "sine.out",
        force3D: true
      });
    };

    animateIn();

    document.querySelectorAll(".image-box").forEach((box) => {
      box.addEventListener("click", () => {
        gsap.to(".image-box", {
          duration: 0.5,
          opacity: 0,
          y: -100,
          stagger: 0.1,
          ease: "back.in",
          onComplete: () => {
            setTimeout(() => {
              animateIn();
            }, 1000);
          }
        });
      });
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5 m-4">
      {images.map((img, index) => (
        <div
          key={index}
          className="image-box relative rounded-xl overflow-hidden shadow-lg backdrop-blur-md bg-white/10 border border-white/30 opacity-0 cursor-pointer"
        >
          <img
            src={img.src}
            alt={`Image ${index + 1}`}
            className="w-full h-60 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-xl font-semibold drop-shadow-lg">{img.text}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Imagecard;
