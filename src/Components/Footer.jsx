import React from "react";
import Transit from "../assets/logo/Transit.png";

const Footer = () => {
  return (
    <footer className="bg-[#6D7179] text-gray-300 py-4 mt-12">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <div className="flex items-center space-x-4 ml-[2%]">
          <img src={Transit} alt="Company Logo" className="h-10" />
          <div>
            <h2 className="text-white text-xl font-bold">Shubh Technologies</h2>
            <p>Lucknow, Uttar Pradesh 226022</p>
            <p>Email: <a href="mailto:dhruv@transitco.in" className="hover:underline">dhruv@transitco.in</a></p>
            <p>Phone: <a href="tel:9999499825" className="hover:underline">9999499825</a></p>
          </div>
        </div>

        <div className="flex-1 hidden md:flex justify-center space-x-4">
          <a href="/help" className="text-gray-300 hover:text-white">Help/Support</a>
          <a href="/policy" className="text-gray-300 hover:text-white">Privacy Policy</a>
          <a href="/contact" className="text-gray-300 hover:text-white">Contact Us</a>
        </div>

        <div className="flex items-center justify-end mr-[2%]">
          <a
            href="/sos"
            className="bg-red-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-600 transition duration-300"
          >
            SOS
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
