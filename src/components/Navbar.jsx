"use client";
import React, { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { IoIosMoon } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineNotificationsActive } from "react-icons/md";
import userPic from "@/assets/office.png";
import Image from "next/image";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="w-full flex justify-between ">
      <div className="flex gap-6">
        <div className="flex items-center gap-2  bg-dashboard rounded-lg w-[25vw] px-2">
          <input type="text" className="flex-1 outline-none " />
          <IoIosSearch className="text-gray-500" />
        </div>
        <button className="px-3 py-1 bg-[#1777ff] text-white rounded-lg cursor-pointer text-sm">
          Search
        </button>
      </div>

      <div className="flex gap-3 items-center">
        <div className="flex gap-1 rounded-sm px-2 py-1 items-center bg-dashboard shadow cursor-pointer">
          <h2 className="text-sm ">Admin</h2>
          <RiArrowDropDownLine />
        </div>

        <div className="flex gap-2">
          {isDark ? (
            <FiSun className="w-6 h-6 text-white cursor-pointer" onClick={() => setIsDark(!isDark)} />
          ) : (
            <IoIosMoon
              className="w-6 h-6  cursor-pointer"
              onClick={() => setIsDark(!isDark)}
            />
          )}
        </div>

        <RxDashboard className="w-6 h-6 cursor-pointer" />

        <MdOutlineNotificationsActive className="w-6 h-6 cursor-pointer" />

        <div className="w-7 h-7 bg-gray-400 rounded-full overflow-hidden cursor-pointer">
          <Image src={userPic} alt="userProfile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
