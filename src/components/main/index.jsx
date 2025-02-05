import React from "react";

import { IoChevronForwardSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

const MainPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-between items-center py-6 px-8">
        <div className="flex items-center gap-2">
          <p className="text-gray-400">Dashboard</p>
          <IoChevronForwardSharp />
          <p className="text-gray-400">Products</p>
          <IoChevronForwardSharp />
          <p>All Products</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 p-2 rounded-md border border-gray-200 w-[400px] bg-white">
            <CiSearch className="text-xl" />
            <input
              className="outline-none"
              type="text"
              placeholder="Search..."
            />
          </div>
          <button className=" bg-white rounded-full p-2 border border-gray-200">
            <IoPersonOutline className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
