"use client";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineNotificationsActive } from "react-icons/md";
import userPic from "@/assets/office.png";
import Image from "next/image";
import { VscGraph } from "react-icons/vsc";
import { IoMdArrowDropup } from "react-icons/io";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      const userObj = JSON.parse(user);
      if (userObj === null || userObj === "undefined") {
        router.push("/login");
      } else if (!userObj.isManager) {
        router.push("/products");
      }
    }
  }, []);
  return (
    <div className="bg-[#e9eef4] w- box-border grid grid-cols-12 gap-2 relative">
      <div className="sm:col-span-2 h-screen sticky top-0">
        {" "}
        <Sidebar />
      </div>
      <div className=" md:col-span-10 col-span-12  py-4 px-5 pt-8 ">
        <div className="w-full flex justify-between ">
          <div className="flex gap-6">
            <div className="flex items-center gap-2  bg-background rounded-lg w-[25vw] px-2">
              <input type="text" className="flex-1 outline-none " />
              <IoIosSearch className="text-gray-500" />
            </div>
            <button className="px-3 py-1 bg-[#1777ff] text-white rounded-lg cursor-pointer text-sm">
              Search
            </button>
          </div>

          <div className="flex gap-3 items-center">
            <div className="flex gap-1 rounded-sm px-2 py-1 items-center bg-background shadow cursor-pointer">
              <h2 className="text-sm ">Admin</h2>
              <RiArrowDropDownLine />
            </div>

            <RxDashboard className="w-6 h-6 cursor-pointer" />

            <MdOutlineNotificationsActive className="w-6 h-6 cursor-pointer" />

            <div className="w-7 h-7 bg-gray-400 rounded-full overflow-hidden cursor-pointer">
              <Image src={userPic} alt="userProfile" />
            </div>
          </div>
        </div>

        <div className="w-full mt-8 flex justify-between items-center px-1">
          <h2 className="text-2xl">Dashboard</h2>
          <button className="px-2 py-1 bg-[#615cf7] text-background rounded-lg cursor-pointer">
            + Add New Product
          </button>
        </div>

        <div className="w-full px-1 grid md:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
          <div className=" bg-background rounded-lg px-5 py-3 flex flex-col gap-1">
            <div className="flex justify-between items-center rounded-lg">
              <h2 className="text-lg font-medium">Total Earnings</h2>
              <VscGraph className="border p-px border-gray-500/40" />
            </div>
            <h1 className="text-xl font-semibold">$ 112,893.00</h1>
            <p className="text-xs flex gap-1 items-center">
              Trend title <IoMdArrowDropup className="text-green-500 h-6 w-6" />{" "}
              <span className="text-green-500">70.5%</span>
            </p>
          </div>

          <div className=" bg-background rounded-lg px-5 py-3 flex flex-col gap-1">
            <div className="flex justify-between items-center rounded-lg">
              <h2 className="text-lg font-medium">Views</h2>
              <VscGraph className="border p-px border-gray-500/40" />
            </div>
            <h1 className="text-xl font-semibold">+ 112,893</h1>
            <p className="text-xs flex gap-1 items-center">
              Trend title <IoMdArrowDropup className="text-green-500 h-6 w-6" />{" "}
              <span className="text-green-500">70.5%</span>
            </p>
          </div>

          <div className=" bg-background rounded-lg px-5 py-3 flex flex-col gap-1">
            <div className="flex justify-between items-center rounded-lg">
              <h2 className="text-lg font-medium">Total Sales</h2>
              <VscGraph className="border p-px border-gray-500/40" />
            </div>
            <h1 className="text-xl font-semibold">+ 112,893</h1>
            <p className="text-xs flex gap-1 items-center">
              Trend title <IoMdArrowDropup className="text-green-500 h-6 w-6" />{" "}
              <span className="text-green-500">70.5%</span>
            </p>
          </div>

          <div className=" bg-background rounded-lg px-5 py-3 flex flex-col gap-1">
            <div className="flex justify-between items-center rounded-lg">
              <h2 className="text-lg font-medium">Subscriptions</h2>
              <VscGraph className="border p-px border-gray-500/40" />
            </div>
            <h1 className="text-xl font-semibold">+ 112,893</h1>
            <p className="text-xs flex gap-1 items-center">
              Trend title <IoMdArrowDropup className="text-green-500 h-6 w-6" />{" "}
              <span className="text-green-500">70.5%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
