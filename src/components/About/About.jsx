// import React from 'react';

// const About = () => {
//   return (
//     <div className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
//         {/* Left Section - Image */}
//         <div className="w-1/2 pr-8">
//           <img
//             src="aftercard.png" // Replace with the actual image you want to display
//             alt="Healthy food"
//             className="w-full h-full object-cover rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Right Section - Text */}
//         <div className="w-1/2 pl-8">
//           <h2 className="text-4xl font-semibold text-gray-800 mb-6">We provide healthy food for your family.</h2>
//           <p className="text-lg text-gray-600 mb-6">
//             Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in the city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
//           </p>
//           <p className="text-lg text-gray-600 mb-6">
//             At our place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
//           </p>
//           <a
//             href="#"
//             className="inline-block text-red-600 font-semibold text-lg hover:text-red-700"
//           >
//             More About Us
//           </a>
          
//           {/* Contact Info Section */}
//           <div className="bg-gray-800 text-white p-6 rounded-lg mt-10">
//             <h3 className="text-2xl font-semibold mb-4">Come and visit us</h3>
//             <p className="mb-2">
//               <strong>Phone:</strong> (414) 857 - 0107
//             </p>
//             <p className="mb-2">
//               <strong>Email:</strong> happy.tummy@restaurant.com
//             </p>
//             <p>
//               <strong>Address:</strong> 837 W. Marshall Lane, Marshalltown, IA 50158, Los Angeles
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import React from 'react';

const About = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 relative">
        {/* Left Section - Image */}
        <div className="w-full relative">
          <img
            src="aftercard.png" // Replace with your image
            alt="Healthy food"
            className="w-[550] h-[650px] object-cover rounded-lg"
          />
          
          {/* Contact Info Section on top of the image */}
          <div className="relative bottom-48 left-100 bg-gray-200 bg-opacity-40 backdrop-blur-lg  text-black p-6 rounded-lg w-73">
            <h3 className="text-2xl font-semibold mb-4">Come and visit us</h3>
            <p className="mb-2">
              <strong>Phone:</strong> 
            </p>
            <p className="mb-2">
              <strong>Email:</strong> happy.jaya@restaurant.com
            </p>
            <p>
              <strong>Address:</strong> 837 W. Marshall Lane, Marshalltown, IA 50158, Los Angeles
            </p>
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="w-1/2 pl-8">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">We provide healthy food for your family.</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in the city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            At our place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
          </p>
          <a
            href="#"
            className="inline-block text-black font-semibold text-lg hover:text-red-700 border rounded-2xl w-40 p-3"
          >
            More About Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
