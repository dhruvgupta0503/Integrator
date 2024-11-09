import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  GoogleMap,
  useJsApiLoader,
  StandaloneSearchBox,
} from "@react-google-maps/api";


const libraries = ["places"];

function WhereToSearch() {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const inputref = useRef(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAPS_API_KEY,
    libraries: libraries,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?location=${location}`);
  };

  const handleonPlacesChanged = () => {
    let address = inputref.current.getPlaces();
    console.log(address);
  };

  return (
    <div className="my-search-container flex flex-row mb-12 mt-2">
      {isLoaded && (
        <div className="bg-[#6D7179] rounded-lg ml-[4%] mt-2 w-[90%] md:w-[85%] lg:w-[80%] p-3 mx-auto">
          {isLoaded && (
            <StandaloneSearchBox
              onLoad={(ref) => (inputref.current = ref)}
              onPlacesChanged={handleonPlacesChanged}
              className="w-full"
            >
              <div className="flex items-center w-full">
                <FaSearch className="text-white mr-2" />
                <input
                  type="text"
                  placeholder="Where To?"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-transparent border-none outline-none text-white w-full"
                />
              </div>
            </StandaloneSearchBox>
          )}
        </div>
      )}
      <NavLink
        onClick={handleSearch}
        to="/search"
        className="bg-[#6D7179] rounded-lg text-white text-center mt-2 mr-[4%] ml-[10%] w-1/6 md:w-1/5 lg:w-1/6 p-2 cursor-pointer"
      >
        Search
      </NavLink>
    </div>
  );
}

export default WhereToSearch;
