import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const StatsTopLine = () => {
  return (
    <div className="w-full  items-center justify-between sm:flex  ">
        <div className="flex gap-4 items-center md:text-sm text-xs ">
          <h2 className="md:text-2xl">Stats</h2>
          <h2 className=" sm:px-4 py-1 bg-dashboard rounded-sm flex items-center gap-2 cursor-pointer">
            Years <IoMdArrowDropdown />
          </h2>
          <h2 className=" sm:px-4 px-1 py-1 bg-dashboard rounded-sm flex items-center gap-2 text-textGray cursor-pointer">
            Aug 20th - Dec 4th <IoMdArrowDropdown />
          </h2>
          <h2>Compared to</h2>
          <h2 className=" sm:px-4 py-1 bg-dashboard rounded-sm flex items-center gap-2 cursor-pointer">
            Previous <IoMdArrowDropdown />
          </h2>
          <h2 className=" sm:px-4 py-1 bg-dashboard rounded-sm flex items-center gap-2 cursor-pointer">
            2024 <IoMdArrowDropdown />
          </h2>
        </div>

        <div className="flex text-sm gap-3  justify-end">
            <h2 className=" px-4 py-1 bg-dashboard rounded-sm flex items-center gap-2 cursor-pointer">
            + Add
          </h2>
          <h2 className=" px-4 py-1 bg-dashboard rounded-sm flex items-center gap-2 cursor-pointer">
            <IoSettingsOutline/> Edit
          </h2>
        </div>
      </div>
  )
}

export default StatsTopLine