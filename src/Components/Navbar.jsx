import React, { useState } from "react";
import { NavLink } from "react-router-dom"; 
import Transit1 from "../assets/logo/Transit1.png.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 bg-[#6D7179] text-white px-4 py-3 z-50 shadow-lg rounded-xl mx-8">
      <div className="flex justify-between items-center">
   
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-[#1D3244]">
            <img
              src={Transit1}
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </NavLink>
        </div>

  
        <button
          className="text-2xl focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          &#9776;
        </button>

   
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" className="hover:text-[#1D3244] px-4 py-2" exact>
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-[#1D3244] px-4 py-2">
            About
          </NavLink>
          {/* <NavLink to="/services" className="hover:text-[#1D3244] px-4 py-2">
            Services
          </NavLink> */}
          <NavLink to="/contact" className="hover:text-[#1D3244] px-4 py-2">
            Contact
          </NavLink>
          <NavLink
            to="/login"
            className="bg-[#6D7179] hover:bg-[#1D3244] px-4 py-2 rounded"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="bg-[#6D7179] hover:bg-[#1D3244] px-4 py-2 rounded"
          >
            Register
          </NavLink>
        </div>
      </div>

   
      <div
        className={`fixed top-0 right-0 h-full bg-[#1D3244] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-64 shadow-lg md:hidden`}
      >
        <button
          className="text-3xl text-white absolute top-4 right-4 focus:outline-none"
          onClick={toggleMenu}
        >
          &times;
        </button>
        <div className="mt-16 flex flex-col items-center space-y-6">
          <NavLink
            to="/"
            className="text-lg hover:bg-[#1D3244] px-4 py-2 rounded"
            onClick={toggleMenu}
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-lg hover:bg-[#1D3244] px-4 py-2 rounded"
            onClick={toggleMenu}
          >
            About
          </NavLink>
          {/* <NavLink
            to="/services"
            className="text-lg hover:bg-[#1D3244] px-4 py-2 rounded"
            onClick={toggleMenu}
          >
            Services
          </NavLink> */}
          <NavLink
            to="/contact"
            className="text-lg hover:bg-[#1D3244] px-4 py-2 rounded"
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
          <NavLink
            to="/login"
            className="text-lg bg-[#6D7179] hover:bg-[#1D3244] px-4 py-2 rounded text-white"
            onClick={toggleMenu}
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="text-lg bg-[#6D7179] hover:bg-[#1D3244] px-4 py-2 rounded text-white"
            onClick={toggleMenu}
          >Register</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;