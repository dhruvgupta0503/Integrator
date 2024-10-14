import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchRide() {
  return (
    <>
      <div className="mt-32 mx-10 bg-[#6D7179] p-4 rounded-md opacity-50 min-h-96">
        Map Integration
      </div>

      <div className="relative z-10 flex flex-row">
        <div className="bg-[#6D7179] rounded-lg mt-[2%] ml-[5%] mr-[1%] w-5/6 md:w-3/4 lg:w-4/5 pt-3 p-2 flex items-center">
          <FaSearch className="text-white mr-2" />
          <input
            type="text"
            placeholder="Search your ride..."
            className="bg-transparent border-none outline-none text-white w-full"
          />
        </div>

        <div className="bg-[#6D7179] rounded-lg text-white mt-[2%] text-center mr-[5%] ml-[1%] w-1/6 md:w-1/5 lg:w-1/6 p-2 cursor-pointer">
          Search
        </div>
      </div>

    </>
  );
}

export default SearchRide;
