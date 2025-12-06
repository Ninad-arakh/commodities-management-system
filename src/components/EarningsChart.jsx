"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import TotalEarningsTop from "./TotalEarningsTop";
import { data } from "@/common/constants";

const EarningsChart = () => {
  const CustomTooltip = ({active, payload}) => {
    if(active && payload && payload.length){
      return(
        <div className="p-4 bg-background rounded-xl shadow">
          <h4>Day: {payload[0].payload.day}</h4>
          <h4 className="text-[#7BE495]">Actual: {payload[0].payload.actual}</h4>
          <h4 className="text-[#22C55E]">Projected: {payload[0].payload.projected}</h4>
        </div>
      )
    }
    return null
  }
  return (
    <div className="w-full h-[350px] relative overflow-hidden rounded-2xl flex flex-col justify-between shadow-xs transition-all bg-dashboard ">
      {/* <TotalEarningsTop title={"Total Earning"} /> */}

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barCategoryGap={40}>
          <CartesianGrid
            strokeDasharray="4 4"
            vertical={false}
            opacity={0.25}
          />

          <XAxis dataKey="day" axisLine={false} tick={{ fill: "#aaa" }} />
          <YAxis axisLine={false} tick={{ fill: "#aaa" }} />

          <Tooltip cursor={{ fill: "transparent" }} content={<CustomTooltip/>} />

          {/* Light Bar (background) */}
          <Bar
            dataKey="projected"
            fill="#7BE495"
            opacity={0.35}
            radius={[6, 6, 0, 0]}
            barSize={30}
            stackId="earnings"
          />

          {/* Dark Bar (foreground) */}
          <Bar
            dataKey="actual"
            fill="#22C55E"
            radius={[6, 6, 0, 0]}
            barSize={30}
            stackId="earnings"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsChart;
