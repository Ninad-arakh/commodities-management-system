import React from "react";
import RecentSalesComponent from "./RecentSalesComponent";

const ResentSales = () => {
  return (
    <div className="w-full p-7 flex flex-col gap-2 ">
      <div className=" flex flex-col gap-1 leading-4">
        <h2 className="text- font-semibold">Recent Sales</h2>
        <p className="text-xs text-textGray">You made 350 sales this mount</p>
      </div>

      <div className="w-full flex flex-col justify-center mt-4 gap-4">
        <RecentSalesComponent price={"15,000"}/>
        <RecentSalesComponent price={"24,000"}/>
        <RecentSalesComponent price={"18,000"}/>
        <RecentSalesComponent price={"13,000"}/>
        <RecentSalesComponent price={"8,000"}/>
        <RecentSalesComponent price={"56,000"}/>
        <RecentSalesComponent price={"2,78,000"}/>
      </div>

      
    </div>
  );
};

export default ResentSales;
