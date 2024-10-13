import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
  
    <nav className="fixed top-4 left-0 right-0 bg-[#6D7179] text-white px-4 py-3 z-50 shadow-lg rounded-xl mx-8">
      <div className="flex justify-between items-center">
        {/* User Image as Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-[#1D3244]">
            <img 
              src="https://via.placeholder.com/40" // Replace with actual user image URL
              alt="User" 
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </a>
        </div>

        {/* Hamburger Menu Toggle Button for mobile */}
        <button
          className="text-2xl focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          &#9776;
        </button>

        {/* Desktop Links - hidden in mobile */}
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-[#1D3244] px-4 py-2">Home</a>
          <a href="#about" className="hover:text-[#1D3244] px-4 py-2">About</a>
          <a href="#services" className="hover:text-[#1D3244] px-4 py-2">Services</a>
          <a href="#contact" className="hover:text-[#1D3244] px-4 py-2">Contact</a>
          <a href="#login" className="bg-[#6D7179] hover:bg-[#1D3244] px-4 py-2 rounded">Login</a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full bg-[#1D3244] transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-64 shadow-lg md:hidden`}>
        <button
          className="text-3xl text-white absolute top-4 right-4 focus:outline-none"
          onClick={toggleMenu}
        >
          &times;
        </button>
        <div className="mt-16 flex flex-col items-center space-y-6">
          <a href="#home" className="text-lg hover:bg-[#1D3244] px-4 py-2 rounded">Home</a>
          <a href="#about" className="text-lg hover:bg-[#1D3244] px-4 py-2 rounded">About</a>
          <a href="#services" className="text-lg hover:bg-[#1D3244] px-4 py-2 rounded">Services</a>
          <a href="#contact" className="text-lg hover:bg-[#1D3244] px-4 py-2 rounded">Contact</a>
          <a href="#login" className="text-lg bg-[#6D7179] hover:bg-[#1D3244] px-4 py-2 rounded text-white">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
