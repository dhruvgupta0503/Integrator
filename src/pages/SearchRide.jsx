import React, { useState, useEffect } from "react";
import { IoArrowBackCircle, IoLocationSharp } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import axios from "axios";

function SearchRide() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedLocation = params.get("location");

  const [coordinates, setCoordinates] = useState(null);
  const [address, setAddress] = useState(selectedLocation); 


  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json`,
          {
            params: {
              address: selectedLocation,
              key: import.meta.env.VITE_GOOGLEMAPS_API_KEY,
            },
          }
        );

        if (response.data.results.length > 0) {
          const { lat, lng } = response.data.results[0].geometry.location;
          setCoordinates({ lat, lng });
        } else {
          console.error("No results found for this location.");
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    if (selectedLocation) {
      fetchCoordinates();
    }
  }, [selectedLocation]);


  const fetchAddress = async (lat, lng) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json`,
        {
          params: {
            latlng: `${lat},${lng}`,
            key: import.meta.env.VITE_GOOGLEMAPS_API_KEY,
          },
        }
      );
      if (response.data.results.length > 0) {
        setAddress(response.data.results[0].formatted_address); 
      } else {
        console.error("No address found for these coordinates.");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  const handleMarkerDragEnd = (e) => {
    const newCoordinates = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    setCoordinates(newCoordinates); 
    fetchAddress(newCoordinates.lat, newCoordinates.lng); 
  };

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
      <div className="mt-4 mx-10 bg-[#6D7179] p-4 rounded-md min-h-96">
        {coordinates && (
          <Map
            center={coordinates}
            zoom={14}
            style={{ height: "500px", width: "100%" }}
          >
            <Marker
              position={coordinates}
              draggable={true} 
              onDragEnd={handleMarkerDragEnd} 
            />
          </Map>
        )}
      </div>

      <div className="flex flex-col sm:flex-row  mt-4 mb-4">
        <div className=" mx-10 flex items-center space-x-2 bg-[#6D7179] opacity-50 rounded-lg p-2 ">
          <IoLocationSharp size={20} color="#6D7179" />
          <p className="text-white">{address}</p>
        </div>

        <div className="relative z-10 flex flex-row">
          <NavLink
            to="/choose"
            className="bg-[#6D7179] rounded-lg text-white text-center w-full py-2 px-8 cursor-pointer mt-4 sm:mt-0 mx-4 font-serif"
          >
            Search Your Ride
          </NavLink>
        </div>
      </div>
    </APIProvider>
  );
}

export default SearchRide;
