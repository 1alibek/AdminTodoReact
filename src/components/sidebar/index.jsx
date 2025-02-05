import React from "react";

import { NavLink } from "react-router-dom";

//icons
import { IoHomeOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { BsBoxSeam } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { FaChartLine } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between fixed left-0 top-0 w-[60px] border-r border-gray-200 h-full py-8">
      <div className="flex flex-col  gap-7 px-4 text-2xl">
        <NavLink to={"/"}>
          <IoHomeOutline />
        </NavLink>
        <NavLink to={"/basket"}>
          <SlBasket />
        </NavLink>
        <NavLink to={"/customer"}>
          <BsBoxSeam />
        </NavLink>
        <NavLink to={"/people"}>
          <GoPeople />
        </NavLink>
        <NavLink to={"/statictics"}>
          <FaChartLine />
        </NavLink>
      </div>
      <div className="text-2xl px-4">
        <CiSettings />
      </div>
    </div>
  );
};

export default Sidebar;
