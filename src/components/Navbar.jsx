"use client";
import React, { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { IoIosMoon } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const classNameA = "h-7 w-7 cursor-pointer";
  const router = useRouter();

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

      <div className="flex gap-2">
        {isDark ? (
          <FiSun className={classNameA} onClick={() => setIsDark(!isDark)} />
        ) : (
          <IoIosMoon
            className={classNameA}
            onClick={() => setIsDark(!isDark)}
          />
        )}

        <button
          onClick={() => {
            localStorage.clear();
            router.push("/login");
          }}
        >
          <AiOutlineLogout className="h-6 w-6 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
