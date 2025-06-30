// components/Breakfast.js
"use client";
import React from "react";

const breakfastItems = [
  {
    id: 1,
    title: "Fried Eggs",
    price: "Rs 9.99",
    image: "/menu1.png",
  },
  {
    id: 8,
    title: "Classic Waffles",
    price: "RS 12.99",
    image: "/ani3.png",
  },
];

const Breakfast = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-10">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Breakfast Menu</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {breakfastItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-red-600 font-bold text-lg mb-1">{item.price}</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">
                Made with eggs, lettuce, salt, oil and other ingredients.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Breakfast;
