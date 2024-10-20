import React from "react";
import { FaWalking } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

function ChooseRide() {
  return (
    <>
      <div className="mt-32 min-h-80 bg-[#6D7179] mx-10 rounded-md p-4 opacity-50">
        choose your ride....
      </div>
      <div className="bg-[#6D7179] mx-10 rounded-md opacity-50 mt-4 p-4 flex flex-col justify-between">
        <div className="flex items-center flex-1">
          <FaWalking color="green" />
          <span className="ml-4 text-white font-serif">From Location</span>
        </div>
        <div className="border-b border-black my-2"></div>
        <div className="flex items-center flex-1">
          <FaCircle color="red" />
          <span className="ml-4 text-white font-serif">To Location</span>
        </div>
      </div>
    </>
  );
}

export default ChooseRide;
