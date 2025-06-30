

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("userAccount"));

    if (savedUser) {
      if (savedUser.email === email && savedUser.password === password) {
        alert("Login successful!");
        router.push("/booktable");
      } else {
        alert("Incorrect email or password.");
      }
    } else {
      alert("No user found. Please create an account first.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-orange-100 backdrop-blur">
      <div className="bg-white shadow-lg rounded-lg flex p-1 max-w-5xl w-full">
        {/* Left Side - Image */}
        <div className="flex-1 overflow-hidden rounded-2xl">
          <img
            src="/account3.png" // <-- Replace this with your image name like food.png
            alt="Login"
            className="w-[600px] h-[600px] object-cover transition-all duration-1000"
          />
    
        </div>

        {/* Right Side - Login Form */}
        <div className="flex-1 pl-8 pr-10 mt-35">
          {/* <h2 className="text-2xl font-medium italic text-black-500 mb-4">
            Welcome Back
          </h2> */}

          <form onSubmit={handleLogin} className="space-y-10">
            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <FaEnvelope className="w-6 h-6 text-gray-400 mr-3" />
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 focus:outline-none text-lg text-gray-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex items-center border-b-2 border-gray-300 pb-2">
              <FaLock className="w-6 h-6 text-gray-400 mr-3" />
              <input
                type="password"
                placeholder="Enter your password"
                className="flex-1 focus:outline-none text-lg text-gray-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-red-500 text-white font-bold text-lg rounded-lg hover:bg-red-600 transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            Don&apos;t have an account?{" "}
            <span
              className="text-red-500 cursor-pointer"
              onClick={() => router.push("/createaccount")}
            >
              Create one
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;


// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { FaEnvelope, FaLock } from "react-icons/fa";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const savedUser = JSON.parse(localStorage.getItem("userAccount"));

//     if (savedUser) {
//       if (savedUser.email === email && savedUser.password === password) {
//         alert("Login successful!");
//         router.push("/");
//       } else {
//         alert("Incorrect email or password.");
//       }
//     } else {
//       alert("No user found. Please create an account first.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-[#d7dde4] p-10 rounded-md shadow-md w-[350px] text-center">
//         {/* Cupcake Image */}
//         <img
//           src="/account3.png" // 👈 change as per your file (place inside public/)
//           alt="Cupcake"
//           className="w-24 h-24 mx-auto mb-4"
//         />

//         {/* Heading */}
//         <h2 className="text-2xl text-gray-700 font-light mb-6">UserFrosting</h2>

//         {/* Form */}
//         <form onSubmit={handleLogin}>
//           <div className="mb-4 relative">
//             <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
//             <input
//               type="email"
//               placeholder="Username or email address"
//               className="pl-10 py-2 w-full border border-gray-300 rounded-sm focus:outline-none"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-4 relative">
//             <FaLock className="absolute left-3 top-3 text-gray-400" />
//             <input
//               type="password"
//               placeholder="Password"
//               className="pl-10 py-2 w-full border border-gray-300 rounded-sm focus:outline-none"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div className="flex items-center mb-4">
//             <input type="checkbox" className="mr-2" />
//             <label className="text-sm text-gray-700">Keep me signed in</label>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-sm font-semibold hover:bg-blue-600 transition"
//           >
//             Login
//           </button>
//         </form>

//         {/* Links */}
//         <div className="mt-4 text-sm text-gray-600 space-y-1">
//           <p className="cursor-pointer hover:underline">I forgot my password</p>
//           <p className="cursor-pointer hover:underline">
//             Resend verification email
//           </p>
//         </div>

//         {/* Account Redirect */}
//         <p className="mt-4 text-sm text-gray-700">
//           Don&apos;t have an account?{" "}
//           <span
//             className="text-blue-600 cursor-pointer hover:underline"
//             onClick={() => router.push("/createaccount")}
//           >
//             Create one
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;





