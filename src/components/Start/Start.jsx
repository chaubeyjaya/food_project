'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";


const Start = () => {
  const router = useRouter();

  const handleBookTableClick = () => {
    router.push('./booktable');
  };
 
  return (
    <div>
      {/* Header Section */}
      <header className="bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-2">
            <img
              src="logo.png" // Replace with your logo image
              alt="Bistro Bliss Logo"
              className="h-12"
            />
            <h1 className="text-2xl font-semibold text-red-600 ">Bistro Bliss</h1>
          </div>
          <div className="hidden md:flex ml-90">
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700">Home</a>
            <a href="/mainabout" className="text-gray-700">About</a>
            <a href="/ourmenu" className="text-gray-700">Menu</a>
            <a href="/articalpage" className="text-gray-700">Pages</a>
            <a href="#contact" className="text-gray-700">Contact</a>
          </nav>
          </div>
          <button
           className=" border border-gray-100 px-6 py-2 rounded-2xl hover:bg-red-100 text-black hover:border-none"
          onClick={handleBookTableClick }
          >
            Book A Table
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <img
          src="home.png" // Replace with your background image
          alt="Food"
          className="w-full h-[650px] object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
          <h2 className="text-4xl font-bold mb-4">Best food for your taste</h2>
          <p className="text-lg mb-6">
            Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.
          </p>
          <div className="space-x-4">
            <button className="bg-red-600 text-white px-6 py-3 rounded-2xl hover:bg-red-700">
              Book A Table
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-2xl hover:bg-gray-700">
              Explore Menu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Start;
