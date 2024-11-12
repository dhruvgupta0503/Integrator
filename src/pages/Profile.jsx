import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5"; 
import { FaUserCircle } from "react-icons/fa"; 

const ProfilePage = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    name: "dhruv",
    phone: "99999999",
    email: "eherf@gmail.com",
    recentRide: {
      date: "",
      rideId: "",
      location: "",
    },
  });

  useEffect(() => {
   
    const fetchUserDetails = async () => {
     
      const response = await fetch("/api/user-details"); 
      const data = await response.json();

      
      setUserDetails({
        name: data.name,
        phone: data.phone,
        email: data.email,
        recentRide: {
          date: data.recentRide.date,
          rideId: data.recentRide.rideId,
          location: data.recentRide.location,
        },
      });
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="pt-16 flex h-screen" style={{ backgroundColor: "#F0F4F8" }}>
     
      <div className="w-full md:w-1/2 bg-[#F0F4F8] p-6 relative mt-10">
        
        <button onClick={() => navigate("/")} className="mb-4 text-gray-500 flex items-center">
          <IoArrowBack className="mr-2" /> Back
        </button>

      
        <div className="flex flex-col items-center mt-4">
          <FaUserCircle className="text-6xl text-gray-600 mb-4" />

        
          <div className="text-2xl font-semibold text-center mb-2">{userDetails.name}</div>
          <div className="text-center text-gray-600">{userDetails.phone}</div>
          <div className="text-center text-gray-600">{userDetails.email}</div>

          
          <div className="mt-6 p-6 bg-[#1D3244] rounded-lg shadow-lg text-gray-100 w-full">
            <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">
              Recent Ride
            </h3>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm">Date:</p>
              <p className="text-sm font-medium">{userDetails.recentRide.date}</p>
            </div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm">Ride ID:</p>
              <p className="text-sm font-medium">{userDetails.recentRide.rideId}</p>
            </div>
            <div className="flex items-start justify-between">
              <p className="text-sm">Location:</p>
              <p className="text-sm font-medium text-gray-300 max-w-xs">
                {userDetails.recentRide.location}
              </p>
            </div>
            <a href="/all-rides" className="text-blue-400 mt-4 inline-block hover:text-blue-300 transition duration-200">
              See all rides
            </a>
          </div>

       
          <div className="mt-4 w-full space-y-2">
            <button
              onClick={() => alert("Logging out...")}
              className="block p-4 bg-red-500 text-white font-bold rounded w-full"
            >
              Log out
            </button>
          </div>
        </div>
      </div>

    
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{ backgroundColor: "#1D3244" }}
      >
        <div className="flex h-full items-center justify-center p-6 text-center">
          <div className="text-white">
            <h1 className="text-3xl font-bold">Everyday City Commute</h1>
            <p className="text-lg mt-2">Compare cab fares and choose the best option</p>
            <span className="text-yellow-400 mt-2">#CompareForSavings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
