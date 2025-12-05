import React from "react";
import Barchart from "./LineChart";

const StatsOneGraphs = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-6 mt-7 ">
        <div className="col-span-8 rounded-xl p-7 bg-dashboard">
          <Barchart />
        </div>
        <div className="col-span-4 rounded-xl p-7 bg-dashboard">g</div>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-7 ">
        <div className="col-span-8 rounded-xl p-7 bg-dashboard">g</div>
        <div className="col-span-4 rounded-xl p-7 bg-dashboard">g</div>
      </div>
    </div>
  );
};

export default StatsOneGraphs;
