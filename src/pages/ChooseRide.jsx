import React, { useEffect, useState } from "react";
import { FaWalking, FaCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import axios from "axios";

function ChooseRide() {
  const location = useLocation();
  const { userLocation, destination } = location.state || {};
  const [fromAddress, setFromAddress] = useState("Fetching location...");

  useEffect(() => {
    const fetchAddress = async () => {
      if (userLocation && userLocation.lat && userLocation.lng) {
        try {
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json`,
            {
              params: {
                latlng: `${userLocation.lat},${userLocation.lng}`,
                key: import.meta.env.VITE_GOOGLEMAPS_API_KEY,
              },
            }
          );

          if (response.data.results.length > 0) {
            setFromAddress(response.data.results[0].formatted_address);
          } else {
            setFromAddress("Address not found");
          }
        } catch (error) {
          console.error("Error fetching address:", error);
          setFromAddress("Error fetching location");
        }
      }
    };

    fetchAddress();
  }, [userLocation]);

  return (
    <>
      <div className="mt-32 min-h-80 bg-[#6D7179] mx-10 rounded-md p-4 opacity-50">
        choose your ride....
      </div>
      <div className="bg-[#6D7179] mx-10 rounded-md opacity-50 mt-4 p-4 flex flex-col justify-between">
        <div className="flex items-center flex-1">
          <FaWalking color="green" />
          <span className="ml-4 text-white font-serif">
            From Location: {fromAddress}
          </span>
        </div>
        <div className="border-b border-black my-2"></div>
        <div className="flex items-center flex-1">
          <FaCircle color="red" />
          <span className="ml-4 text-white font-serif">
            To Location: {destination || "Unknown"}
          </span>
        </div>
      </div>
    </>
  );
}

export default ChooseRide;
