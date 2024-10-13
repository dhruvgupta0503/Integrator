import React from "react";
import HeroImage from "../assets/Hero/Hero.png";

function Hero() {
  return (
    <>
      <div className="mx-[5vh] mt-4 md:mt-4 lg:mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10  w-full p-10 rounded-lg">
          <div className="hero-section-data p-8">
            <h1 className="text-4xl font-bold mt-12 md:mt-6 text-white">
              Discover Your Perfect Ride
            </h1>
            <p className="text-xl mt-2 font-serif antialiased text-justify text-white">
              Find, compare, and book the best ride for your journey—all in one
              place. Your perfect trip starts here.
            </p>
          </div>
          <div className="hero-section-image">
            <img
              src={HeroImage}
              alt="hero"
              className="w-full md:w-[75%] h-[85%] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
