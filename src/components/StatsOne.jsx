import React from "react";
import StatsOneGraphs from "./StatsOneGraphs";
import StatsTopLine from "./StatsTopLine";

const StatsOne = () => {
  return (
    <div className="w-full ">
      {/* stats top line */}
      <StatsTopLine />

      {/* graphs */}
      <StatsOneGraphs />
    </div>
  );
};

export default StatsOne;
