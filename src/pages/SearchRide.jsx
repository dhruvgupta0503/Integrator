import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import { APIProvider } from "@vis.gl/react-google-maps";

function SearchRide() {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const selectedLocation = params.get("location");

  return (
    <APIProvider
      apiKey={import.meta.env.VITE_GOOGLEMAPS_API_KEY}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <NavLink to={"/"}>
        <div className="mx-10 text-[#6D7179] opacity-70 mt-28 hover:text-[#4e5056] cursor-pointer">
          <IoArrowBackCircle size={50} />
        </div>
      </NavLink>
      <div className="mt-4 mx-10 bg-[#6D7179] p-4 rounded-md opacity-50 min-h-96">
        Map Integration for: {selectedLocation}
      </div>

      <div className="relative z-10 flex flex-row">
        <NavLink
          to="/choose"
          activeClassName=""
          className="bg-[#6D7179] rounded-lg text-white mt-[3%] mx-auto text-center justify-self-center w-3/6 md:w-2/6 lg:w-1/6 p-2 cursor-pointer"
        >
          Search Your Ride
        </NavLink>
      </div>
    </APIProvider>
  );
}

export default SearchRide;
