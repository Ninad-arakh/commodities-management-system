"use client";
import React, { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { IoStorefrontOutline } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { CiWallet } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { GrHelpBook } from "react-icons/gr";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const rawUser = localStorage.getItem("user");
      setUser(JSON.parse(rawUser));
    }
  }, []);
  const pathname = usePathname();
  if (user === null) {
    return null;
  } else {
    return (
      <div className="w-full text-sm">
        <div>
          <h2 className="flex w-full px-4 items-center py-4 gap-2">
            <span>
              <CgProfile className="w-6 h-6" />
            </span>
            NStore
          </h2>
        </div>

        <div className="flex flex-col gap-2 w-full items-center px-2">
          <div className="flex justify-between items-center bg-dashboard rounded-lg w-full px-3 py-1 cursor-pointer">
            <div className="flex items-center gap-3 ">
              <IoHomeOutline className=" h-5 w-5" />
              <h2 className="">Home</h2>
            </div>
            <RiArrowDropDownLine className=" h-7 w-8 " />
          </div>

          {user.isManager && (
            <Link
              href={"/dashboard"}
              className={`flex justify-between items-center ${
                pathname === "/dashboard" ? "bg-dashboard" : ""
              } rounded-lg w-full px-3 py-1 cursor-pointer`}
            >
              <div className="flex items-center gap-3">
                <RxDashboard className=" h-5 w-5" />

                <h2 className="">Dashboard</h2>
              </div>
              <RiArrowDropDownLine className=" h-7 w-8 " />
            </Link>
          )}

          <div className=" rounded-lg w-full px-3 py-1">
            <div className="flex justify-between  w-full cursor-pointer">
              <div className="flex items-center gap-3">
                <IoStorefrontOutline className=" h-5 w-5" />
                <h2 className="">Store</h2>
              </div>
              <RiArrowDropDownLine className=" h-7 w-8 " />
            </div>
            <div className="flex px-2 gap-4 py-1">
              <div className="bg-black w-px"></div>
              <div className="w-full gap-2 flex flex-col">
                <Link href={"/products"}>
                  <h2
                    className={`py-1 px-2 rounded-lg w-full ${
                      pathname === "/products" ? "bg-dashboard" : ""
                    } cursor-pointer`}
                  >
                    Product
                  </h2>
                </Link>
                <Link href={"/addproduct"}>
                  <h2
                    className={`py-1 px-2 rounded-lg w-full ${
                      pathname === "/addproduct" ? "bg-dashboard" : ""
                    } cursor-pointer`}
                  >
                    Add Product
                  </h2>
                </Link>
              </div>
            </div>
          </div>

          <div className=" rounded-lg w-full px-3 py-1">
            <div className="flex justify-between  w-full cursor-pointer">
              <div className="flex items-center gap-3">
                <VscGraph className=" h-5 w-5" />
                <h2 className="">Analytic</h2>
              </div>
              <RiArrowDropDownLine className=" h-7 w-8 " />
            </div>
            <div className="flex px-2 gap-4 py-1">
              <div className="bg-black w-px"></div>
              <div className="w-full gap-2 flex flex-col">
                <h2 className="py-1 px-2 rounded-lg w-full cursor-pointer">
                  Traffic
                </h2>
                <h2 className="py-1 px-2 rounded-lg w-full cursor-pointer">
                  Earning
                </h2>
              </div>
            </div>
          </div>

          <div className=" rounded-lg w-full px-3 py-1">
            <div className="flex justify-between  w-full cursor-pointer">
              <div className="flex items-center gap-3">
                <CiWallet className=" h-5 w-5" />
                <h2 className="">Finances</h2>
              </div>
              <RiArrowDropDownLine className=" h-7 w-8 " />
            </div>
            <div className="flex px-2 gap-4 py-1">
              <div className="bg-black w-px"></div>
              <div className="w-full gap-2 flex flex-col">
                <h2 className="py-1 px-2 rounded-lg w-full cursor-pointer">
                  Payment
                </h2>
                <h2 className="py-1 px-2 rounded-lg w-full cursor-pointer">
                  Payout
                </h2>
              </div>
            </div>
          </div>

          <div className=" rounded-lg w-full px-3 py-1">
            <div className="flex justify-between  w-full cursor-pointer">
              <div className="flex items-center gap-3">
                <IoSettingsOutline className=" h-5 w-5" />
                <h2 className="">Account Setting</h2>
              </div>
              <RiArrowDropDownLine className=" h-7 w-8 " />
            </div>
            <div className="flex px-2 gap-4 py-1">
              <div className="bg-black w-px"></div>
              <div className="w-full gap-2 flex flex-col">
                <h2 className="py-1 px-2 rounded-lg w-full cursor-pointer">
                  My Profile
                </h2>
                <h2 className="py-1 px-2 rounded-lg w-full cursor-pointer">
                  Security
                </h2>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center rounded-lg w-full px-3 py-1">
            <div className="flex items-center gap-3 cursor-pointer">
              <GrHelpBook className=" h-5 w-5" />
              <h2 className="">Help & Support</h2>
            </div>
            <RiArrowDropDownLine className=" h-7 w-8 " />
          </div>
        </div>
      </div>
    );
  }
};

export default Sidebar;
