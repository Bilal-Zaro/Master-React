import React from "react";
// Import the logo image
import logoImage from "../images/Logo.png"; // Adjust path based on your file structure

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <div className="flex items-center">
          <span className="relative mr-2">
            
           
          </span>
          {/* Logo image replacing "eadymadeUI" text */}
          <img src={logoImage} alt="ReadymadeUI Logo" className="h-8" />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-blue-600 font-medium">
          Home
        </a>
        <a href="#" className="text-gray-700 font-medium">
          Team
        </a>
        <a href="#" className="text-gray-700 font-medium">
          Feature
        </a>
        <a href="#" className="text-gray-700 font-medium">
          Blog
        </a>
        <a href="#" className="text-gray-700 font-medium">
          About
        </a>
        <a href="#" className="text-gray-700 font-medium">
          Contact
        </a>
      </div>

      {/* Auth Buttons */}
      <div className="flex space-x-4">
        <button className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 font-medium">
          Login
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
