import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import StatsOneGraphs from "./StatsOneGraphs";


const StatsOne = () => {
  return (
    <div className="w-full ">

        {/* stats top line */}
      <div className="w-full flex items-center justify-between ">
        <div className="flex gap-4 items-center text-sm">
          <h2 className="text-2xl cursor-pointer">Stats</h2>
          <h2 className=" px-4 py-1 bg-background rounded-sm flex items-center gap-2 cursor-pointer">
            Years <IoMdArrowDropdown />
          </h2>
          <h2 className=" px-4 py-1 bg-background rounded-sm flex items-center gap-2 text-textGray cursor-pointer">
            Aug 20th - Dec 4th <IoMdArrowDropdown />
          </h2>
          <h2>Compared to</h2>
          <h2 className=" px-4 py-1 bg-background rounded-sm flex items-center gap-2 cursor-pointer">
            Previous <IoMdArrowDropdown />
          </h2>
          <h2 className=" px-4 py-1 bg-background rounded-sm flex items-center gap-2 cursor-pointer">
            2024 <IoMdArrowDropdown />
          </h2>
        </div>

        <div className="flex text-sm gap-3">
            <h2 className=" px-4 py-1 bg-background rounded-sm flex items-center gap-2 cursor-pointer">
            + Add
          </h2>
          <h2 className=" px-4 py-1 bg-background rounded-sm flex items-center gap-2 cursor-pointer">
            <IoSettingsOutline/> Edit
          </h2>
        </div>
      </div>

      {/* graphs */}
      <StatsOneGraphs />
    </div>
  );
};

export default StatsOne;
