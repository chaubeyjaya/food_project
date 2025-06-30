import React from 'react';
import { FaCoffee, FaHamburger, FaBeer, FaIceCream } from 'react-icons/fa'; // Import icons from react-icons

const Browsemenu = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12">Browse Our Menu</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Breakfast Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform duration-100 hover:rotate-7">
            <FaCoffee className="mx-auto text-4xl text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Breakfast</h3>
            <p className="text-gray-600 mb-4">
              In the new era of technology, we look in the future with certainty and pride for our life.
            </p>
            <button className="text-red-600 font-semibold">Explore Menu</button>
          </div>

          {/* Main Dishes Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform duration-100 hover:rotate-7">
            <FaHamburger className="mx-auto text-4xl text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Main Dishes</h3>
            <p className="text-gray-600 mb-4">
              In the new era of technology, we look in the future with certainty and pride for our life.
            </p>
            <button className="text-red-600 font-semibold">Explore Menu</button>
          </div>

          {/* Drinks Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform duration-100 hover:rotate-7">
            <FaBeer className="mx-auto text-4xl text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Drinks</h3>
            <p className="text-gray-600 mb-4">
              In the new era of technology, we look in the future with certainty and pride for our life.
            </p>
            <button className="text-red-600 font-semibold">Explore Menu</button>
          </div>

          {/* Desserts Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform duration-100 hover:rotate-7 ">
            <FaIceCream className="mx-auto text-4xl text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Desserts</h3>
            <p className="text-gray-600 mb-4">
              In the new era of technology, we look in the future with certainty and pride for our life.
            </p>
            <button className="text-red-600 font-semibold">Explore Menu</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browsemenu;
