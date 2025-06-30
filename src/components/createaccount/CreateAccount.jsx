
// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

// const CreateAccount = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [imageIndex, setImageIndex] = useState(0);
//   const router = useRouter();

//   const images = ["food.png", "ani1.png", "ani2.png"]; // Add your image file names here

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // 2 minutes = 120000 milliseconds

//     return () => clearInterval(interval); // Cleanup
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ fullName, email, password });
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-red-50 backdrop-blur">
//       <div className="bg-white shadow-lg rounded-lg flex p-1 max-w-5xl w-full">
//         {/* Left Section - Rotating Image */}
//         <div className="flex-1 overflow-hidden rounded-2xl">
//           <img
//             src={images[imageIndex]}
//             alt="Food"
//             className="w-[600px] h-[600px] object-cover transition-all duration-1000"
//           />
//         </div>

//         {/* Right Section - Form */}
//         <div className="flex-1 pl-8 pr-10 mt-35">
//           <h2 className="text-2xl font-medium italic text-black-500 mb-4">
//             Create an account
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-10">
//             <div className="flex items-center border-b-2 border-gray-300 pb-2">
//               <FaUser className="w-6 h-6 text-gray-400 mr-3" />
//               <input
//                 type="text"
//                 id="fullName"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 placeholder="Eg. Jaya Chaubey"
//                 className="flex-1 focus:outline-none text-lg text-gray-600"
//               />
//             </div>

//             <div className="flex items-center border-b-2 border-gray-300 pb-2">
//               <FaEnvelope className="w-6 h-6 text-gray-400 mr-3" />
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email Address"
//                 className="flex-1 focus:outline-none text-lg text-gray-600"
//               />
//             </div>

//             <div className="flex items-center border-b-2 border-gray-300 pb-2">
//               <FaLock className="w-6 h-6 text-gray-400 mr-3" />
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 className="flex-1 focus:outline-none text-lg text-gray-600"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-3 bg-red-500 text-white font-bold text-lg rounded-lg hover:bg-red-600 transition duration-300"
//             >
//               Create an account
//             </button>
//           </form>

//           <p className="mt-4 text-center text-gray-600">
//             Already have an account?{" "}
//             <span
//               className="text-red-500 cursor-pointer"
//               onClick={() => router.push("/login")}
//             >
//               Sign in
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateAccount;
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const CreateAccount = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageIndex, setImageIndex] = useState(0);
  const router = useRouter();

  const images = ["account.png", "account2.png", "ani2.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      fullName,
      email,
      password,
    };

    localStorage.setItem("userAccount", JSON.stringify(userData));
    alert("Account created successfully!");
    router.push("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-red-50 backdrop-blur">
      <div className="bg-white shadow-lg rounded-lg flex p-1 max-w-5xl w-full">
        <div className="flex-1 overflow-hidden rounded-2xl">
          <img
            src={images[imageIndex]}
            alt="Food"
            className="w-[600px] h-[600px] object-cover transition-all duration-1000"
          />
        </div>

        <div className="flex-1 pl-8 pr-10 mt-35">
          <h2 className="text-2xl font-medium italic text-black-500 mb-4">
            Create an account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <FaUser className="w-6 h-6 text-gray-400 mr-3" />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Eg. Jaya Chaubey"
                className="flex-1 focus:outline-none text-lg text-gray-600"
              />
            </div>

            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <FaEnvelope className="w-6 h-6 text-gray-400 mr-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="flex-1 focus:outline-none text-lg text-gray-600"
              />
            </div>

            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <FaLock className="w-6 h-6 text-gray-400 mr-3" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="flex-1 focus:outline-none text-lg text-gray-600"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-red-500 text-white font-bold text-lg rounded-lg hover:bg-red-600 transition duration-300"
            >
              Create an account
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <span
              className="text-red-500 cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;


