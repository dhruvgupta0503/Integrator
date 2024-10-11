import React from 'react'
import { FaSearch } from "react-icons/fa";


function WhereToSearch() {
    return (
      <>
        <div className="flex flex-row">
          <div className=" bg-[#6D7179] rounded-lg mt-[2%] ml-[15%] mr-[1%] w-5/6 pt-3 p-2">
            <FaSearch className="text-white" />
          </div>
          <div className=" bg-[#6D7179] rounded-lg text-white mt-[2%] text-center mr-[15%] ml-[1%] w-1/6 p-2">
            Search
          </div>
        </div>
      </>
    );
}

export default WhereToSearch
