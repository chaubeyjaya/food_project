// "use client";

// import { useState } from "react";
// import axios from "axios";
// import { Search, Droplet, Wind } from "lucide-react";

// export default function WeatherApp() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState("");

//   const getWeather = async () => {
//     try {
//       const apiKey = "e42cebc67e7e8962b8da1f7d64053017";
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
//       );
//       setWeather(response.data);
//       setError("");
//     } catch (err) {
//       setError("City not found!");
//       setWeather(null);
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/sky.png')" }}
//     >
//       <div className="bg-white/20 backdrop-blur-md shadow-xl p-6 rounded-2xl w-[22rem] border border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
//         <div className="flex items-center gap-2 mb-6 bg-white/30 px-4 py-2 rounded-full shadow-inner">
//           <input
//             type="text"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             placeholder="Search city..."
//             className="flex-1 bg-transparent text-gray-800 placeholder-gray-500 font-medium outline-none"
//           />
//           <button onClick={getWeather}>
//             <Search className="text-blue-600 hover:scale-110 transition-transform duration-200" />
//           </button>
//         </div>

//         {error && <p className="text-red-600 text-center font-medium">{error}</p>}

//         {weather && (
//           <div className="text-center text-white">
//             <div className="mb-4">
//               <img
//                 src="/weather.png"
//                 alt="weather icon"
//                 className="w-24 mx-auto drop-shadow-xl"
//               />
//             </div>
//             <h2 className="text-4xl font-bold mb-2">{weather.main.temp}°C</h2>
//             <p className="capitalize text-lg mb-4 text-blue-100">
//               {weather.weather[0].description}
//             </p>

//             <div className="flex justify-between text-sm px-6">
//               <div className="flex items-center gap-1">
//                 <Droplet size={18} />
//                 <span>{weather.main.humidity}%</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <Wind size={18} />
//                 <span>{weather.wind.speed} km/h</span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import axios from "axios";
import { Search, Droplet, Wind } from "lucide-react";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    try {
      const apiKey = "e42cebc67e7e8962b8da1f7d64053017";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
      setError("");
    } catch (err) {
      setError("City not found!");
      setWeather(null);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/weather.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Weather Card */}
      <div className="z-10 bg-white/20 backdrop-blur-md shadow-xl p-6 rounded-2xl w-[22rem] border border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        {/* Search */}
        <div className="flex items-center gap-2 mb-6 bg-white/30 px-4 py-2 rounded-full shadow-inner">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search city..."
            className="flex-1 bg-transparent text-gray-800 placeholder-gray-500 font-medium outline-none"
          />
          <button onClick={getWeather}>
            <Search className="text-blue-600 hover:scale-110 transition-transform duration-200" />
          </button>
        </div>

        {error && (
          <p className="text-red-600 text-center font-medium">{error}</p>
        )}

        {weather && (
          <div className="text-center text-white">
            <div className="mb-4">
              <img
                src="/weather.png"
                alt="weather icon"
                className="w-24 mx-auto drop-shadow-xl"
              />
            </div>
            <h2 className="text-4xl font-bold mb-2">{weather.main.temp}°C</h2>
            <p className="capitalize text-lg mb-4 text-blue-100">
              {weather.weather[0].description}
            </p>

            <div className="flex justify-between text-sm px-6">
              <div className="flex items-center gap-1">
                <Droplet size={18} />
                <span>{weather.main.humidity}%</span>
              </div>
              <div className="flex items-center gap-1">
                <Wind size={18} />
                <span>{weather.wind.speed} km/h</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}








