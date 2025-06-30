"use client";
import React from "react";

const ArticlePage = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        The secret tips & tricks to prepare a perfect burger & pizza for our customers
      </h1>

      <div className="mb-8">
        <img
          src="/artical1.png" // Replace with your image
          alt="Food"
          className="w-full h-80 object-cover rounded-lg shadow-md "
        />
      </div>

      <div className="text-lg text-gray-800">
        <p className="mb-4">
          When you want to create a masterpiece, there's more to making the perfect burger than simply
          throwing ingredients together. In fact, there's a science to it. Here are the secrets that can
          take your burger to the next level:
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          What do you need to prepare a home-made burger?
        </h2>
        <p className="mb-4">
          You need quality ingredients and attention to detail. Here's how to create a burger that's packed
          with flavor:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>High-quality beef patty, freshly seasoned</li>
          <li>Freshly baked buns, soft on the inside and slightly toasted on the outside</li>
          <li>Fresh vegetables like lettuce, tomato, and onions</li>
          <li>Your choice of cheese - American, cheddar, or Swiss</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          What are the key ingredients to create delicious pizza?
        </h2>
        <p className="mb-4">
          The key to making a great pizza starts with the dough and ends with the toppings. Here's how you
          can create a delicious pizza:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Fresh pizza dough, properly rested and risen</li>
          <li>Quality tomato sauce, made from fresh tomatoes</li>
          <li>Cheese with great melting properties, like mozzarella</li>
          <li>Fresh toppings of your choice, including vegetables, meats, or herbs</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          What are the right ingredients to consider in side dishes?
        </h2>
        <p className="mb-4">
          Side dishes complete a meal. When it comes to perfecting side dishes, you'll want ingredients that
          balance the main course and provide additional flavor:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Fresh vegetables like cucumbers, carrots, or lettuce</li>
          <li>Potatoes for crispy fries or creamy mashed potatoes</li>
          <li>Simple sauces or dips, like ranch or garlic butter</li>
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Read More Articles</h2>
        <div className="flex gap-6">
          <div className="w-1/3">
            <img
              src="/ani1.png" // Replace with your image
              alt="Burger"
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
            <h3 className="text-xl font-semibold text-gray-900 mt-2">Perfect Burger Recipe</h3>
          </div>

          <div className="w-1/3">
            <img
              src="/artical2.png" // Replace with your image
              alt="Fries"
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
            <h3 className="text-xl font-semibold text-gray-900 mt-2">Crispy Fries Secrets</h3>
          </div>

          <div className="w-1/3">
            <img
              src="ani2.png" // Replace with your image
              alt="Sandwich"
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
            <h3 className="text-xl font-semibold text-gray-900 mt-2">Tasty Sandwich Recipes</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlePage;
