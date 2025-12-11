import React from "react";

const ShimmerNav = () => {
  return (
    <div className="w-full  flex  gap-2 animate-pulse justify-between">
      <div className="flex gap-2">
        <div className="inputbox w-[25vw] h-8 bg-[#a3b9dd] rounded-full mb-2"></div>
        <div className="inputbox w-[3vw] h-8 bg-[#a3b9dd] rounded-full mb-2"></div>
      </div>
      <div className="flex gap-2">
        <div className="inputbox w-[10vw] h-8 bg-[#a3b9dd] rounded-full mb-2"></div>
        <div className="inputbox w-[2vw] h-8 bg-[#a3b9dd] rounded-full mb-2"></div>
        <div className="inputbox w-[2vw] h-8 bg-[#a3b9dd] rounded-full mb-2"></div>
      </div>
    </div>
  );
};

export default ShimmerNav;
