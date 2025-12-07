"use clint";
import React from "react";

const Footer = () => {
  return (
    <div className=" w-full bg-dashboard py-12 ">
      <div className="grid grid-cols-12 px-20 gap-18">
        <div className="col-span-4 ">
          <div className=" flex gap-5 px-2">
            <div className="w-6 h-6 bg-[#ff9000] rounded-md rotate-45 flex items-center justify-center">
              <div className="w-[17px] h-[17px] bg-dashboard rounded-xs"></div>
            </div>
            <h1 className="text-2xl font-bold">Opion</h1>
          </div>
          <p className="leading-tight mt-8 text-sm">
            Ease of shopping is our main focus. With powerful search features
            and customizable filters,you can easily find the products you are
            looking for.
          </p>
          <div className="flex w-full gap-4 mt-5">
            <div className="w-10 h-10 rounded-full bg-gray-500 cursor-pointer"></div>
            <div className="w-10 h-10 rounded-full bg-gray-500 cursor-pointer"></div>
            <div className="w-10 h-10 rounded-full bg-gray-500 cursor-pointer"></div>
          </div>
          <h2 className=" mt-5 text-xl ">Subscribe to Newsletter</h2>
          <input
            type="text"
            className="w-full bg-inputBox rounded-2xl px-2 py-3"
            placeholder="Enter Your Email Here"
          />
        </div>

        <div className="col-span-7  grid grid-cols-3 gap-5">
          <div className="px-2 flex flex-col gap-2">
            <h2 className="text-lg font-semibold cursor-pointer">
              Get Started
            </h2>
            <h3 className="cursor-pointer">Service</h3>
            <h3 className="cursor-pointer">Contact Us</h3>
            <h3 className="cursor-pointer">Affiliate Program</h3>
            <h3 className="cursor-pointer">About Us</h3>
          </div>
          <div className="px-2 flex flex-col gap-2">
            <h2 className="text-lg font-semibold cursor-pointer">
              Get Started
            </h2>
            <h3 className="cursor-pointer">Dashboard</h3>
            <h3 className="cursor-pointer">Platform</h3>
            <h3 className="cursor-pointer">Workout Libary</h3>
            <h3 className="cursor-pointer">App Design</h3>
          </div>
          <div className="px-2 flex flex-col gap-2">
            <h2 className="text-lg font-semibold cursor-pointer">
              Get Started
            </h2>
            <h3 className="cursor-pointer">About Us</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
