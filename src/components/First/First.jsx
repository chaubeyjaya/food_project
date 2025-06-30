'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const First = () => {
  const router = useRouter();

  const handleClick = (path) => {
    router.push(path);
  };

  const subjects = [
    { name: "Math", image: "/math.png", path: "./math" },
    { name: "Science", image: "/science.png", path: "/science" },
    { name: "History", image: "/history.png", path: "/history" },
    // { name: "English", image: "/english.png", path: "/english" },
    { name: "English", image: "/english.png", path: "/englishlevel" },
    { name: "Geography", image: "/geography.png", path: "/geography" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* 🌌 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/back.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🧊 Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* ✨ Main Content */}
      <div className="relative z-20 px-4 py-10">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-center text-white drop-shadow-lg mb-12">
          Welcome! <span className="text-yellow-400">Test Your Knowledge</span> 🔥
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subjects.map((subject, index) => (
            <div
              key={index}
              onClick={() => handleClick(subject.path)}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-4 cursor-pointer transition transform hover:scale-105 hover:shadow-yellow-400 hover:border-yellow-200"
            >
              <Image
                src={subject.image}
                alt={subject.name}
                width={400}
                height={250}
                className="rounded-2xl object-cover w-full h-48"
              />
              <div className="text-center mt-4">
                <h2 className="text-2xl font-bold text-white">{subject.name}</h2>
                <p className="text-gray-200 text-sm">Click to start {subject.name} quiz</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default First;





