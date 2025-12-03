"use client";
import React, { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { IoIosMoon } from "react-icons/io";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const classNameA = "h-7 w-7 cursor-pointer";

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);


  return (
    <div className="w-full h-14 items-center flex justify-between px-10 box-border border-b border-gray-500/30">
      <h2 className={classNameA}>CMS</h2>

      <div onClick={() => setIsDark(!isDark)}>
        {isDark ? (
          <FiSun className={classNameA} />
        ) : (
          <IoIosMoon className={classNameA} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
