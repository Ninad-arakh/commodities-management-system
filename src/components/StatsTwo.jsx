import React from "react";
import StatsTopLine from "./StatsTopLine";
import StatsTwoGraph from "./StatsTwoGraph";

const StatsTwo = () => {
  return (
    <div className="w-full">
      {/* stats top line */}
      <StatsTopLine />

      <StatsTwoGraph />

    </div>
  );
};

export default StatsTwo;
