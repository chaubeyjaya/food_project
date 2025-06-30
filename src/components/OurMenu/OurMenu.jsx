
// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// const categories = ["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"];

// const menuItems = [
//   {
//     id: 1,
//     title: "Fried Eggs",
//     price: "Rs 9.99",
//     image: "/menu1.png",
//   },
//   {
//     id: 2,
//     title: "Hawaiian Pizza",
//     price: "RS 15.99",
//     image: "/menu2.png",
//   },
//   {
//     id: 3,
//     title: "Martinez Cocktail",
//     price: "RS 7.25",
//     image: "/menu3.png",
//   },
//   {
//     id: 4,
//     title: "Butterscotch Cake",
//     price: "RS 20.99",
//     image: "/menu4.png",
//   },
//   {
//     id: 5,
//     title: "Mint Lemonade",
//     price: "RS 5.89",
//     image: "/menu5.png",
//   },
//   {
//     id: 6,
//     title: "Chocolate Icecream",
//     price: "RS 18.05",
//     image: "/menu6.png",
//   },
//   {
//     id: 7,
//     title: "Cheese Burger",
//     price: "RS 12.55",
//     image: "/ani1.png",
//   },
//   {
//     id: 8,
//     title: "Classic Waffles",
//     price: "RS 12.99",
//     image: "/ani3.png",
//   },
// ];

// const OurMenu = () => {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const router = useRouter();

//   const handleCategoryClick = (category) => {
//     setActiveCategory(category);

//     // Navigate to category route if needed
//     if (category === "Breakfast") {
//       router.push("/braekfast");
//     }
//   };

//   return (
//     <section className="bg-white py-20 px-4 md:px-10">
//       <h2 className="text-5xl font-bold text-center text-gray-900 mb-4">
//         Our Menu
//       </h2>
//       <p className="text-center text-gray-500 max-w-xl mx-auto mb-10">
//         We consider all the drivers of change gives you the components you need
//         to change to create a truly happens.
//       </p>

//       <div className="flex flex-wrap justify-center gap-4 mb-10">
//         {categories.map((category, idx) => (
//           <button
//             key={idx}
//             onClick={() => handleCategoryClick(category)}
//             className={`px-5 py-2 rounded-full text-sm font-medium border ${
//               activeCategory === category
//                 ? "bg-red-600 text-white"
//                 : "bg-white text-gray-700 border-gray-300"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {activeCategory === "All" && (
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {menuItems.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <p className="text-red-600 font-bold text-lg mb-1">
//                   {item.price}
//                 </p>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-500 text-sm">
//                   Made with eggs, lettuce, salt, oil and other ingredients.
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default OurMenu;

"use client";
import React, { useState } from "react";

const categories = ["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"];

const menuItems = [
  {
    id: 1,
    title: "Fried Eggs",
    price: "Rs 9.99",
    image: "/menu1.png",
    category: "Breakfast",
  },
  {
    id: 2,
    title: "Hawaiian Pizza",
    price: "RS 15.99",
    image: "/menu2.png",
    category: "Main Dishes",
  },
  {
    id: 3,
    title: "Martinez Cocktail",
    price: "RS 7.25",
    image: "/menu3.png",
    category: "Drinks",
  },
  {
    id: 4,
    title: "Butterscotch Cake",
    price: "RS 20.99",
    image: "/menu4.png",
    category: "Desserts",
  },
  {
    id: 5,
    title: "Mint Lemonade",
    price: "RS 5.89",
    image: "/menu5.png",
    category: "Drinks",
  },
  {
    id: 6,
    title: "Chocolate Icecream",
    price: "RS 18.05",
    image: "/menu6.png",
    category: "Desserts",
  },
  {
    id: 7,
    title: "Cheese Burger",
    price: "RS 12.55",
    image: "/ani1.png",
    category: "Main Dishes",
  },
  {
    id: 8,
    title: "Classic Waffles",
    price: "RS 12.99",
    image: "/ani3.png",
    category: "Breakfast",
  },


   // 👇 6 new items
   {
    id: 9,
    title: "Pancake Stack",
    price: "RS 10.99",
    image: "/paper1.png",
    category: "Breakfast",
  },
  {
    id: 10,
    title: "Veggie Pasta",
    price: "RS 13.50",
    image: "/paper2.png",
    category: "Main Dishes",
  },
  {
    id: 11,
    title: "Orange Juice",
    price: "RS 4.75",
    image: "/paper3.png",
    category: "Drinks",
  },
  {
    id: 12,
    title: "Strawberry Smoothie",
    price: "RS 6.20",
    image: "/paper4.png",
    category: "Drinks",
  },
  {
    id: 13,
    title: "Vanilla Cupcake",
    price: "RS 8.80",
    image: "/paper5.png",
    category: "Desserts",
  },
  {
    id: 14,
    title: "Grilled Sandwich",
    price: "RS 11.25",
    image: "/ani1.png",
    category: "Main Dishes",
  },

];

const OurMenu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-white py-20 px-4 md:px-10">
      <h2 className="text-5xl font-bold text-center text-gray-900 mb-4">
        Our Menu
      </h2>
      <p className="text-center text-gray-500 max-w-xl mx-auto mb-10">
        We consider all the drivers of change gives you the components you need
        to change to create a truly happens.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium border ${
              activeCategory === category
                ? "bg-red-600 text-white"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
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
              <p className="text-red-600 font-bold text-lg mb-1">
                {item.price}
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
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

export default OurMenu;


