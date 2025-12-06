import React from "react";
import { MdArrowDropUp } from "react-icons/md";

const TotalEarningsTop = ({ title }) => {
  return (
    <div className=" absolute inset-0 px-1 py-1">
      <h4 className="">{title}</h4>
      <h2 className="font-bold text-xl">$ 112,893.00</h2>
      <p className="flex gap-2 text-xs items-center">
        Trend title <MdArrowDropUp className="bg-black text-green-500 -mr-1" />{" "}
        <span className="text-green-500">70.5%</span>
      </p>
    </div>
  );
};

export default TotalEarningsTop;
