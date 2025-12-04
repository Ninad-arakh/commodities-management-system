import React from "react";
import { FaRegUser } from "react-icons/fa";

const RecentSalesComponent = ({price}) => {
  return (
    <div className="flex gap-3">
      <div className=" bg-gray-300 w-10 h-8 bg-cover rounded-full  flex items-center justify-center">
        <FaRegUser className="" />
      </div>

      <div className="flex justify-between items-center w-full">
        <div className="leading-4 ">
          <h3 className="text-sm">Ninad Arakh</h3>
          <p className="text-textGray text-xs">arakhninad@gmail.com</p>
        </div>

        <div>
          <h2 className="font-semibold">+${price}.00</h2>
        </div>
      </div>
    </div>
  );
};

export default RecentSalesComponent;
