import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-10 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo and Description */}
        <div>
          <h1 className="text-2xl font-bold italic mb-4">🍜 Bistro <span className="text-red-400">Bliss</span></h1>
          <p className="text-gray-300 mb-4">
            In the new era of technology we look in the future with certainty and pride to
            for our company and.
          </p>
          <div className="flex space-x-4">
            <FaTwitter className="text-red-400 hover:text-white cursor-pointer" />
            <FaFacebookF className="text-red-400 hover:text-white cursor-pointer" />
            <FaInstagram className="text-red-400 hover:text-white cursor-pointer" />
            <FaGithub className="text-red-400 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Pages */}
        <div>
          <h2 className="text-white font-semibold mb-4">Pages</h2>
          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Delivery</li>
          </ul>
        </div>

        {/* Utility Pages */}
        <div>
          <h2 className="text-white font-semibold mb-4">Utility Pages</h2>
          <ul className="space-y-2 text-gray-300">
            <li>Start Here</li>
            <li>Styleguide</li>
            <li>Password Protected</li>
            <li>404 Not Found</li>
            <li>Licenses</li>
            <li>Changelog</li>
            <li>View More</li>
          </ul>
        </div>

        {/* Instagram Images */}
        <div>
          <h2 className="text-white font-semibold mb-4">Follow Us On Instagram</h2>
          <div className="grid grid-cols-2 gap-3">
            <img src="/footer1.png" alt="insta1" className="w-full h-20 object-cover rounded-lg" />
            <img src="/footer2.png" alt="insta2" className="w-full h-20 object-cover rounded-lg" />
            <img src="/footer3.png" alt="insta3" className="w-full h-20 object-cover rounded-lg" />
            <img src="/footer4.png" alt="insta4" className="w-full h-20 object-cover rounded-lg" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm">
        Copyright © 2023 Hashtag Developer. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
