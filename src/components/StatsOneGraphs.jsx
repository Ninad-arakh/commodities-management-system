import React from "react";
import Linechart from "./LineChart";
import Barchart from "./Barchart";
import Subscriptions from "./Subscriptions";
import EarningsChart from "./EarningsChart";

const StatsOneGraphs = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-6 mt-7 ">
        <div className="md:col-span-8 col-span-12 rounded-xl p-7 bg-dashboard">
          <Linechart />
        </div>
        <div className="md:col-span-4 col-span-12 rounded-xl px-7 bg-dashboard">
          <Barchart />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-7 ">
        <div className="md:col-span-8 col-span-12 rounded-xl p-7 bg-dashboard">
          <EarningsChart />
        </div>
        <div className="md:col-span-4 col-span-12 rounded-xl p-7 bg-dashboard">
          <Subscriptions />
        </div>
      </div>
    </div>
  );
};

export default StatsOneGraphs;
